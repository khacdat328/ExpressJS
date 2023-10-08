import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  singup(@Body() dto: any) {
    console.log({
      dto,
    });
    return this.authService.signup();
  }
  @Post('signin')
  singin() {
    return this.authService.signin();
  }
}
