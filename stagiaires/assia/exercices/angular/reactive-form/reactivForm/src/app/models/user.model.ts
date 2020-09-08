export class User {
    constructor(
        public lName: string,
        public email: string,
        public nation: string,
        public gender: string,
        public job: string,
        public dob: Date,
        public pwd: string,
        public login: string,
//optional come always at the end
        public fName?: string,
        public freeTimeSlot?: { freeFrom?: Date, freeUpto: Date },
    ){}
}
