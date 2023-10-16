// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Test } from '@nestjs/testing';
// import { mock } from 'jest-mock-extended';
// import { TYPEORM_TOKENS } from '../../../database/repositoris/tokens';
// import { UserRepository } from '../../../database/repositoris/users/user.repository';
// import { CreateUsersService } from '.';
// import { UserDto } from '../../../domain/users/dto/create-user.dto';
// import { IUser } from 'src/domain/users/user.domain';
// import { UserContext } from '../../../test/use-case/UserContext';

// describe(CreateUsersService.name, () => {
//     let createUserMock: CreateUsersService;
//     const userRepository = mock<UserRepository>();
//     const user: IUser = new UserContext({
//         id: 'DADADADADA',
//         name: 'Tthomaz',
//         mail: 'thomaz@gmail.com',
//         password: 'dadada',
//     });
//     console.log(user, '**********************ususarios**************');
//     beforeEach(async () => {
//         const module = await Test.createTestingModule({
//             providers: [
//                 CreateUsersService,
//                 {
//                     provide: TYPEORM_TOKENS.USER_REPOSITORY,
//                     useValue: userRepository,
//                 },
//             ],
//         }).compile();
//         createUserMock = module.get(CreateUsersService);
//         userRepository.execute.mockResolvedValue(user);
//         console.log(userRepository.execute.mockResolvedValue(user));
//     });

//     afterEach(() => {
//         jest.resetAllMocks();
//     });

//     it('should create a new user sucefully', async () => {
//         const userBody: UserDto = {
//             id: 'DADADADADA',
//             name: '',
//             mail: 'thomaz@gmail.com',
//             password: 'dadada',
//         };
//         const retorno = await createUserMock.createUser(userBody);
//         console.log(retorno, '*******************retorno***************');
//         expect(retorno).toEqual(user);
//     });
// });
