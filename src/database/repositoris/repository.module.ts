import { UserRepository } from './users/user.repository';

export class RepositoryModule {
  static register() {
    return {
      userRepository: UserRepository,
    };
  }
}
