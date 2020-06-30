import { Employee } from './employee';

export class List {
    private listEmployees: Employee[];

    constructor() {
        
    }

    public getListEmployees(): Employee[] {
        return this.listEmployees;
    }
}
