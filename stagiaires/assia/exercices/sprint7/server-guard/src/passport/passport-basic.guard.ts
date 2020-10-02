import { AuthGuard } from "@nestjs/passport";

export class PassportBasicGuard extends AuthGuard('basic')
{}