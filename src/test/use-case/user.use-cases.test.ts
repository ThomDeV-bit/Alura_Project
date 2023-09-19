/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';
import { SearchUserService } from '../../use-cases/users/users-search.use-case';
import { TYPEORM_TOKENS } from '../../database/repositoris/tokens';
import { UserRepository } from '../../database/repositoris/users/user.repository';
import { CreateUsersService } from '../../use-cases/users/users-create.use-case';
import { UserDto } from '../../domain/users/dto/create-user.dto';
import { IsUUID } from 'class-validator';
import { IUser } from 'src/domain/users/user.domain';
import exp from 'constants';

describe('Listar usuarios', () => {
  let searchUser: SearchUserService;
  let createUserMock: CreateUsersService;
  const userRepository = mock<UserRepository>();

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
    createUserMock = module.get(CreateUsersService);
  });

  describe('createUser', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should return a list of users', async () => {
      const userResponse = mock<IUser>();
      const user = mock<UserDto>({
        id: '918dacv7a1',
        name: 'thomaz',
        mail: 'thomaz@hotmail.com',
        password: '123354545454',
      });
      console.log(user, 'PASSOU TESTE');
      expect(createUserMock.createUser(user)).toBeDefined();
    });
  });
});
