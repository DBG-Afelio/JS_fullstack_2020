// Design Pattern Singleton
// Partager une seule instance d'un même objet

export class Singleton {
    private static instance: Singleton|null = null;
    private current: number;
    private constructor(currentValue: number) {
        this.current = currentValue;
        // console.log('construct');
        // instructions à ne faire qu'une seule fois et à l'initialisation
    }

    /**
     * setCurrent
    */
    public setCurrent(currentValue: number) {
        this.current = currentValue; 
    }

    public getCurrent(): number {
        return this.current; 
    }

    public static getInstance(current: number = 0): Singleton {
        if (!Singleton.instance && current) {
            Singleton.instance = new Singleton(current);
        }
        return Singleton.instance as Singleton;
    }
}

export class B {
    public s: Singleton;
    constructor() {
        this.s = Singleton.getInstance(2);
    }
}

export class A {
    public s: Singleton;
    constructor() {
        this.s = Singleton.getInstance(1);
    }
}

export class C {
    public s: Singleton;
    constructor() {
        this.s = Singleton.getInstance(3);
    }
}

const a = new A();
const c = new C();
const b = new B();

a.s.getCurrent(); // 1
b.s.getCurrent(); // 1