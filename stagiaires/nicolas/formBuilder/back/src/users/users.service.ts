import { HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UsersDto } from './models/users-dto';

@Injectable()
export class UsersService {

    constructor(
        private http:HttpService,
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
      ) {}

    async getAllUsers():Promise<UserEntity[]>{

        const allUsers = await this.usersRepository.find()


       return allUsers

    }

    async getUserById(userId:number):Promise<UserEntity>{

        const user = await this.usersRepository.findOne(userId)


        return user

    }

    async getUserByCountry(countryCode:string):Promise<UserEntity[]>{

        const allUsers = await this.usersRepository.find({ nationality:countryCode })
          
        return allUsers
        
    }

    async createUser(user:UsersDto){

    
        const userDB = new UserEntity()
        userDB.lastName = user.lastName;
        userDB.id = user.id;
        userDB.gender = user.gender;
        userDB.birthdayDate = user.birthdayDate;
        userDB.login = user.login;
        userDB.nationality = user.nationality;
        userDB.password = user.password;
        userDB.availabilities = user.availabilities;

        console.log(userDB)
        return this.usersRepository.save(userDB)


    }
    getAllCountryCode():Observable<string[]>{

        return this.http.get<{alpha3Code:string}[]>('https://restcountries.eu/rest/v2/all?fields=alpha3Code')
          .pipe(
            map(codes => {
    
              return codes.data.map(code => code.alpha3Code)
    
            })
    
          )
    
      }

}
