import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  singup(
    @Body('email') email: string,
    @Body('password', ParseIntPipe) password: string,
  ) {
    console.log({
      email,
      typeOfEmail: typeof email,
      password,
      typeofPW: typeof password,
    });
    return this.authService.signup();
  }
  @Post('signin')
  singin() {
    return this.authService.signin();
  }
}
