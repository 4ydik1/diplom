import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from "../user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
        private userService: UserService
    ) {
        super();
    }

    async validate(userId: number, password: string): Promise<any> {
        const user = await this.authService.validateUser(userId, password);
        return user;

    }

}