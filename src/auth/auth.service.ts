import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    sayhello(): string {
        return 'Hello !';
    }
}