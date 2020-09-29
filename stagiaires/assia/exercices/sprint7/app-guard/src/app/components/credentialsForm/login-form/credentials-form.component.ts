import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Credentials } from 'src/app/models/Credentials/Credentials.model';

@Component({
  selector: 'app-credentials-form',
  templateUrl: './credentials-form.component.html',
  styleUrls: ['./credentials-form.component.css']
})
export class CredentialsFormComponent implements OnInit {

    @Output()
    public registerEv = new EventEmitter<Credentials>();
    @Output()
    public connectEv = new EventEmitter<Credentials>();
    constructor() { }

    ngOnInit(): void {
    }

    public sendCredentials(login: string, password: string, isConnect: boolean): void {
        const newCred = new Credentials(login, password);
        
        isConnect ? this.connectEv.emit(newCred) : this.registerEv.emit(newCred);

    }

}
