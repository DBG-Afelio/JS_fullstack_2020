import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-pizza-resume-pop-up',
  templateUrl: './pizza-resume-pop-up.component.html',
  styleUrls: ['./pizza-resume-pop-up.component.scss']
})
export class PizzaResumePopUpComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() pizza:Pizza;
  @Input() mode:string;
  @Output() save = new EventEmitter<boolean>();

  constructor(private modalService: BsModalService) { } 

  ngOnInit(): void {

  
  }
  openModalWithClass(template: TemplateRef<any>) {  

        this.modalRef = this.modalService.show(  
    
          template,  
    
          Object.assign({}, { class: 'gray modal-lg' })  

        );

  }
  onClickSave(){

    this.save.emit(true);
    this.modalRef.hide()

  }
}
