import { Token } from "./token";
export class Tower{
    private id:number;
    tokens:Token[] = []

    constructor(id:number, tokenNumber:number){

        this.id=id
        if(id === 1){

            for(let i = 0 ; i < tokenNumber ; i++){

                this.tokens.push(new Token(i+1))
    
            }
            

        }
    }
    getId():number{

        return this.id
        
    }
    getTokenPosition(tokenSize:number):number | undefined{

        return this.tokens.findIndex(element => element.getSize() === tokenSize)+1

    }
    moveTokenToTower(targetTower:Tower):boolean{
        if(this.tokens.length>0){
            if( targetTower.tokens.length === 0 || this.tokens[0].getSize()<targetTower.tokens[0].getSize()){

                targetTower.tokens.unshift(this.tokens[0]);
                this.tokens.shift();
                return true

            }else{

                return false

            }
        }else{

            return false

        }

    }


}