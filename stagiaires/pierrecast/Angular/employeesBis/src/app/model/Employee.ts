import { EmployeeDto } from './EmployeeDto';

export class Employee {
    constructor(
        public id: number, 
        public prenom: string,
        public nom: string,
        public manager: boolean,
        public date_naissance: Date, 
        public departement: number
    ) {
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.manager = manager;
        this.date_naissance = date_naissance;
        this.departement = departement;
        
    }

    public getId():number {
        return this.id;
    }

    public getPrenom():string {
        return this.prenom;
    }

    public getNom():string {
        return this.nom;
    }

    public isManager():boolean {
        return this.manager;
    }

    public static fromDto(employeeDto: EmployeeDto) : Employee {
        return new Employee(
            employeeDto.id, 
            employeeDto.prenom, 
            employeeDto.nom, 
            employeeDto.manager,
            new Date(employeeDto.date_naissance),
            employeeDto.departement,
        );
    }

    public toDto(): EmployeeDto {
        return {
            id: this.id,
            prenom: this.prenom,
            nom: this.nom, 
            manager: this.manager,
            date_naissance: this.date_naissance.toString(),
            departement: 0
        }
    }
}
