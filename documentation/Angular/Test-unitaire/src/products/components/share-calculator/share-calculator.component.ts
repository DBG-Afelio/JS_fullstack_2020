import { Component, Input, OnInit, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const STEP_TIME = 150;

@Component({
    selector: 'app-share-calculator',
    templateUrl: './share-calculator.component.html',
    styleUrls: ['./share-calculator.component.scss'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ShareCalculatorComponent), multi: true }
    ],
})
export class ShareCalculatorComponent implements OnInit, ControlValueAccessor, OnChanges {

    private priceByShare = 20;

    @Input()
    public max = 50;

    @Input()
    public step = 1;

    public partNumber: number;
    public price: number;

    private timeoutHandler;

    public showOperatorPlus = false;
    public showOperatorLess = false;
    constructor() {
        this.partNumber = 1;
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.calculPrice();
        this.showOperators();
    }

    showOperators(): void {
        if (this.max > this.partNumber ) {
            this.showOperatorPlus = true;
        } else {
            this.showOperatorPlus = false;
        }
        if (this.partNumber > 1) {
            this.showOperatorLess = true;
        } else {
            this.showOperatorLess = false;
        }
    }

    // Mandatories ControlValueAccessor methods: start
    writeValue(partNumber: number): void {
        if (partNumber !== null && partNumber !== undefined) {
            this.partNumber = partNumber;
        }
        this.calculPrice();
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    private propagateChange = (obj: number) => { };
    // Mandatories ControlValueAccessor methods: end

    increase() {
        if (this.partNumber < this.max ) {
            this.partNumber += this.step;
            this.calculPrice();
        }
    }

    decrease(): boolean {
        if (this.partNumber > 1) {
            this.partNumber -= this.step;
            this.calculPrice();
        }
        return false;
    }

    decreaseMousedown(): boolean {
        this.timeoutHandler = setInterval(() => {
            this.decrease();
        }, STEP_TIME);
        return false;
    }

    decreaseMouseup(): boolean {
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler);
            this.propagateChange(this.partNumber);
        }
        return false;
    }

    increaseMousedown() {
        this.timeoutHandler = setInterval(() => {
            this.increase();
        }, STEP_TIME);
    }

    increaseMouseup() {
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler);
            this.propagateChange(this.partNumber);
        }
    }

    private calculPrice() {
        this.price = this.partNumber * this.priceByShare;
        this.showOperators();
    }

}
