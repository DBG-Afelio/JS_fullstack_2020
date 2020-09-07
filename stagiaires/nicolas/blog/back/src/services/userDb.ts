import { pool } from "../pool";
import { UserDto } from "../models/dtos/userDto";
import { User } from "../models/user";



export class UserDb {

    static async getAllUsers():Promise<User[]>{

        const result = await pool.query("SELECT u.id,u.nom,u.prenom,u.bio,e.adresse FROM Utilisateurs u INNER JOIN Emails e ON e.utilisateur_id = u.id ")
        .catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }
    static async getUserByid(id:string):Promise<User>{

        const result = await pool.query("SELECT u.id,u.nom,u.prenom,u.bio,e.adresse FROM Utilisateurs u INNER JOIN Emails e ON e.utilisateur_id = u.id  WHERE u.id = $1",[id])
        .catch(error => {

            console.log(error);
            throw new Error('error');

        })
        const user = result.rows[0]
        return new User(

            user.id,
            user.nom,
            user.prenom,
            user.bio,
            user.addresse

        )

    }
    static async createUser(bodyRequest:UserDto){

        const {nom,prenom,bio} = bodyRequest;

        const result = await pool.query("INSERT INTO Utilisateurs (nom,prenom,bio) VALUES ($1,$2,$3) ",[nom,prenom,bio]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }
    static async modifyUser(id:string, bodyRequest:UserDto){

        const {nom,prenom,bio} = bodyRequest;


        const result = await pool.query("UPDATE Utilisateurs SET nom = $1,prenom = $2,bio = $3 WHERE id = $4 ",[nom,prenom,bio,id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }
    static async deleteUser(id:string){

        const result = await pool.query("DELETE FROM Utilisateurs WHERE id = $1 ",[id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }

}
