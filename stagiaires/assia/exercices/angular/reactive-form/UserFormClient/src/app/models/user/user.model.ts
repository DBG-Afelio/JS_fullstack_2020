export class User {
    constructor(
       // public id: number,
        public lName: string,
        public email: string,
        public nation: string,
        public gender: string,
        public jobs: string[],
        public dob: Date,
        public pwd: string,
        public login: string,
        public fName?: string,
        public freeTimeSlot?: { freeFrom?: Date, freeUpto?: Date },
    ){}
}
