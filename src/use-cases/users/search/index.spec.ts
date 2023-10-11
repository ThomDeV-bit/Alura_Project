/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';
import { SearchUserService } from '.';
import { TYPEORM_TOKENS } from '../../../database/repositoris/tokens';
import { UserRepository } from '../../../database/repositoris/users/user.repository';
import { CreateUsersService } from '../create';
import { IUser } from 'src/domain/users/user.domain';
import { UserContext } from '../../../test/use-case/UserContext';

describe(SearchUserService.name, () => {
    let searchUser: SearchUserService;
    const userRepository = mock<UserRepository>();
    const users: IUser[] = [
        new UserContext({
            id: 'DADADADADA',
            name: 'Tthomaz',
            mail: 'thomaz@gmail.com',
        }),
    ];
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                SearchUserService,
                CreateUsersService,
                {
                    provide: TYPEORM_TOKENS.USER_REPOSITORY,
                    useValue: userRepository,
                },
            ],
        }).compile();
        searchUser = module.get(SearchUserService);
        userRepository.search.mockResolvedValue(users);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('shold be define', async () => expect(searchUser).toBeDefined());

    it('find user', async () => {
        const result = await searchUser.searchUser();
        expect(result).toEqual(users);
    });
});
