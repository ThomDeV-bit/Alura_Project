import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { throwError } from "rxjs";


export class UserValidator implements ValidatorConstraintInterface {
    constructor(private readonly userRepository : UserEntity)
    async validate(value: any, validatonArguments?: ValidationArguments): Promise<boolean> {
        throw new Error('Method not implemented')

    }
}