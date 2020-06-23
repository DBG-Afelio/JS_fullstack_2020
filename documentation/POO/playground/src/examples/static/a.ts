import { Singleton } from './singleton';
export class A {
    public s: Singleton;
    constructor() {
        this.s = Singleton.getInstance(1);
    }
}
