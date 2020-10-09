import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AddUserDto } from "./dto/add-user-dto";
import { UserSubscribeDto } from "./dto/user-subscribe.dto";
import { UserEntity } from "./entity/user.entity";
import * as bcrypt from 'bcrypt';
import { LoginCredentialsDto } from "./dto/login-credentials.dto";
import { JwtService } from "@nestjs/jwt";
import { UserRoleEnum } from "src/enums/user-role.enum";
import { BasicAuthDto } from "./dto/basic-auth.dto";
import { BasicAuthGuard } from "./guards/basic.guard";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ) {}


   async getUsers() {
       return await this.userRepository.find();
   }   
   
   async addUser(user: AddUserDto) {
        return await this.userRepository.save(user);
   }


   /*------------------------------------------------------------------------------------------ */ 


  // STRATEGIE BASIC 

    async registerClassic(userData: UserSubscribeDto): Promise<Partial<UserEntity>> {
        
        //Creation d'un nouvel user a partir du dto
        const user = this.userRepository.create({
            ...userData
        })

        // Generer le salage
        user.salt = await bcrypt.genSalt();

        // Hashage mot de passe + salage
        user.password = await bcrypt.hash(user.password, user.salt);

        try {
            // Sauvegarde du nouvel user en db
            await this.userRepository.save(user);
        } catch (err) {
            throw new HttpException(`Ces données existent déja !`, HttpStatus.CONFLICT)
    ;    }

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        };    
    }


    async validateUser(username: string, password: string) {   

        // Recherche de l'utilisateur
        const user = await this.userRepository.createQueryBuilder("user")
        .where("user.username = :username", 
        {username})
        .getOne();

        // Generer le salage
        // user.salt = await bcrypt.genSalt();

        // Si user non trouvé, jeter une exception
        if(!user) {
        throw new HttpException('utilisateur non trouvé', HttpStatus.NOT_FOUND);
        }

        // On hash le password donné en entrée pour comparer avec le hash password de l'utilisateur dans la db
        const hashedPassword = await bcrypt.hash(password, user.salt); 

        if(hashedPassword === user.password) { 
            return user; 
        } else {
        throw new HttpException('username ou mot de passe érroné', HttpStatus.UNAUTHORIZED);
        } 
    }

   /*------------------------------------------------------------------------------------------ */ 


   // STRATEGIE JWT

   async register(userData: UserSubscribeDto): Promise<Partial<UserEntity>> {

    // Variante

    // const { username, email, password } = userData;
    
    //Creation d'un nouvel user a partir du dto
    const user = this.userRepository.create({
        ...userData
    })

    // Generer le salage
    user.salt = await bcrypt.genSalt();

    // Hashage mot de passe + salage
    user.password = await bcrypt.hash(user.password, user.salt);


    try {
        // Sauvegarde du nouvel user en db
        await this.userRepository.save(user);
    } catch (err) {
        throw new HttpException('Ces données existent déja !', HttpStatus.CONFLICT)
    }

    return {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
    };    
 }



   // LOGIN JWT 

    async loginJWT(user) {


        const payload = {
            username: user.username, 
            email: user.email,
            role: user.role
        }

        // Signature du payload
        const jwt = await this.jwtService.sign(payload);

        
        return  {
            access_token: jwt
        };
    } 

    isOwnerOrAdmin(objet, user) {
        return user.role === UserRoleEnum.ADMIN || (objet.user && objet.user.id === user.id);
    }

} 