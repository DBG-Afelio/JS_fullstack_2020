export class Deadline {
    constructor(
        private hours: number,
        private minutes: number,
        private seconds: number
    ) { }
    
    getHours(): number{
        return this.hours;
    }
    getMinutes(): number{
        return this.minutes;
    }
    getSeconds(): number{
        return this.seconds;
    }
    setHours(hoursLimit:number): void{
        hoursLimit < 0 || hoursLimit > 23 ? this.hours = 10 : this.hours = hoursLimit;
    }
    setMinutes(minutesLimit: number): void{
        minutesLimit < 0 || minutesLimit > 59 ? this.minutes = 30 : this.minutes = minutesLimit;
    }
    setSeconds(secondsLimit: number): void{
        secondsLimit < 0 || secondsLimit > 59 ? this.seconds = 0 : this.seconds = secondsLimit;
    }
}
