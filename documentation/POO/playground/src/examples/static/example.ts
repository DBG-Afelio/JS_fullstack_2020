export class Foo {
    private static nb: number = 0;
    public nom: string = 'foo';

    constructor() {
        Foo.nb++;
    }

    static getNb() {
        return Foo.nb;
    }
}

const str = new String('toto');
const str2 = new String('titi');
str.indexOf('o');
str2.indexOf('o');

Math.random();

console.log(Foo.getNb()); // 0

const f = new Foo(); //1
const f2 = new Foo(); //2
const f3 = new Foo(); //3

console.log(Foo.getNb()); // 3
