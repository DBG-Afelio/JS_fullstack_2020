import { Singleton } from './singleton';
export class B {
    public s: Singleton;
    constructor() {
        this.s = Singleton.getInstance(2);
    }
}
