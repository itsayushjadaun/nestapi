import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard';

@Controller('users')
export class UserController {
      @UseGuards(JwtGuard)
      @Get('me')
      gete(
            @GetUser() user : User,
            @GetUser('email') email : string, 
            ){
            console.log({
                  user:user,
            });
            
            return user;
      }

      @Patch()
      edituser(){

      }
}
