import { Tower } from "./tower";
export class Hanoi{

    towers:Tower[] = [];
    private tokenNumber:number;

    constructor(towersNumber:number,tokenNumber:number){

        this.tokenNumber = towersNumber;
        
        for(let i = 0 ; i < towersNumber ; i++){

            if(i === 0){

                this.towers.push(new Tower(i+1,tokenNumber))

            }else{
                this.towers.push(new Tower(i+1, 0))
            }

        }
        
    }
    getTowerById(id:number):Tower | undefined{

        return this.towers.find(element => element.getId() === id)
        
    }


}