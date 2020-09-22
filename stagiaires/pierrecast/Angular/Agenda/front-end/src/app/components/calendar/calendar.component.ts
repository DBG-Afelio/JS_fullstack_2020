import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public activeDate: Date;
  public activeYear: number;
  public activeMonth: number;
  public nbDays: number;
  public nbDaysBefore: number;
  public weekdays: string[] = ['LUN.', 'MAR.','MER.','JEU.','VEN.','SAM.','DIM.'];

  constructor() {
    this.activeDate = new Date();
    this.activeYear = this.activeDate.getFullYear();
    this.activeMonth = this.activeDate.getMonth();
    this.nbDaysBefore = this.getWeekday(this.activeYear, this.activeMonth);
    this.nbDays = this.getNumberOfDays(this.activeYear, this.activeMonth);
  }

  ngOnInit(): void {
  }

  public getNumberOfDays(year: number, month: number): number {
    var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
    return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  }

  public getWeekday(year: number, month: number): number {
    let first = new Date();
    first.setFullYear(year);
    first.setMonth(month);
    first.setDate(1);
    
    return first.getDay();
  }

  public getFrMonth(i) {
    let month = ['JAN.', 'FEV.', 'MARS', 'AVR.', 'MAI', 'JUIN', 'JUIL.', 'AOUT', 'SEP.', 'OCT.', 'NOV.', 'DEC.']
    return month[i];
  }

  public counter(i: number) {
    return new Array(i);
  }
}
