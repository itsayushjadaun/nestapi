import { IsString ,IsNotEmpty,IsEmail} from "class-validator"

export class AuthDto{
      @IsEmail()
      @IsNotEmpty()
      email:string

      @IsString()
      @IsNotEmpty()
      password :string
}