import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { MyEvent } from 'src/app/models/event.model/MyEvent';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.css'],
})
export class SchedulerViewComponent implements OnInit {
    @Input() myEvents: MyEvent[]=[];

    @ViewChild('myAgenda')
    public myAgenda: ScheduleComponent;

    // public dataTests = [{
    //     id: 1,
    //     name: 'Testing',
    //     startDate: new Date(2020, 8, 25),
    //     endDate: new Date(2020, 8, 27),
    //     //url: 'www.google.com',
    //     // description: string,
    //     // gpsCoord?: string,
    //     // imageUrl?: string,
    //     // address?: Address,
    //     // tel?: string,
    //     // email?: string,
    //     // tags?: Tag[],
    //     // uId?: string,
    // }];
    public eventSettings: EventSettingsModel;
    

    constructor() { }

    ngOnInit(): void {
        this.eventSettings = {
            dataSource: this.myEvents,
            fields: {
                id: ('id').toString(),
                subject: { name: 'name', validation: {} },
                startTimezone: { name: 'startDate' , default: `${new Date(2020, 8, 25, 8, 0)}` },
                endTimezone: { name: 'endDate' , default: `${new Date(2020, 8, 26, 18, 30)}`},


                // startTimezone: {},
                // endTimezone: {},
                // location: {},
                // description: {},
                // isAllDay: {},
                // recurrenceID: {},
                // recurrenceRule: {},
                // recurrenceException: {}
            }
        }
        // this.myAgenda.addEvent(this.);

    }

    public onAddButtonClick(): void{

    }


}
