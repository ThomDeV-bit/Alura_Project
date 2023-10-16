import { CreateUsersService } from './users-create-use-case';
import { SearchUserService } from './users-search-use-case';

export const USERS_USE_CASES = [SearchUserService, CreateUsersService];
