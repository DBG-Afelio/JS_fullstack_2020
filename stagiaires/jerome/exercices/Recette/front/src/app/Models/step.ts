import { StepDto } from './Dtos/StepDto/step.dto';

export class Step{

    constructor(
       public description:string
    ){}

    static fromDto(stepDto:StepDto):Step{

        return new Step(

            stepDto.description
            
        )
    }

    toDto(){
        return{

            description:this.description

        }
    }
    

}