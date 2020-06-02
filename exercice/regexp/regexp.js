// Expression régulières

// construction des regexp
const r1 = new RegExp('abc','gim');  // ok pour les biobliothèque
const r2 = /abc/gim; //crée tout de suite l'expression (Attention protéger le / -> \/)

// Flags

    // - g: global => ne s'arrète pas au premier résultat trouvé

    "aaaa".replace(/a/, 'b'); // "baaa"
    "aaaa".replace(/a/g, 'b'); // "bbbb"

    // - m: multiline => chaque retour à la ligne compte pour un début de chaîne
    /^a/.test('accord?'); // true
    /^a/.test('bca'); // false
    /^a/.test('bc\na?'); // false
    /^a/m.test('bc\na?'); // true


    // - i: insensitive
    /a/i.test('Abc'); //true

// Caractères

// Suite
    /abc/.test('aabbcc'); // false
    /abc/.test('aabcc'); // true
    /ab c/.test('aabcc'); // false

// début fin de chaîne
// - ^: debut de la chaine
// - $: fin de la chaine
/^abc/.test('aabcc'); // false
/^abc/.test('abcc'); // true
/abc$/.test('aabcc'); // false
/abc$/.test('aabc'); // true
/^abc$/.test('aabc'); // false
/^aBc$/.test('abc'); // false
/^aBC$/i.test('abc'); // true
/^aBC$/m.test('Abc\naBC\nabc'); // true 

// énumération de caractère
    // - []

/[abc]/.test('a'); // true
/[abc]/.test('javascript'); // true
/[Aa]b[cC]/.test('abc'); // true
/[Aa]b[cC]/.test('aAbcC'); // true
/^[Aab]b[cC]/.test('aBbcabC'); // false 
/[Aa]b[cC]$/.test('l\'abc du javascript'); // false
/[Aa\]]b[cC]/.test('l\']bc du javascript'); // true

    // - [...-...] : range de valeur

/[a-z]/.test('o'); // true
/[a-z]/.test('é'); // false
/[a-z]/.test('F'); // false
/[A-Za-z]/.test('F'); // true
/[A-Za-z]/.test('F'); // true
/^[A-Z$_a-z][a-z]/.test('$i55'); // true
/^[A-Z$_a-z0-9][A-Z$_a-z0-9][A-Z$_a-z0-9]$/.test('$55'); // true
/^[1-34]$/.test('5'); // false
/^[1-34]$/.test('23'); // false
/^[1-4]$/.test('3'); // true

/^[0-9]\.[1-9]$/.test('0.4'); // true
/^[0-9\-]$/.test('-'); // true
/^\/\//.test('// commentaire'); // true

    //[^...] : tout sauf ...

/^[^A]/.test('Ah oui!');  // false
/^[A^]/.test('Ah oui!');  // true

    // raccourcis
        // \d : [0-9]
        // \D : [^0-9]
        // \w : [a-zA-Z0-9_$]
        // \W : [^a-zA-Z0-9_$]
        // \s : tout caractère d'espacement
        // . : tous les caractères



// Répétition
    // {n} : strictement n occurences
    // {n,} : au moins n occurences
    // {n,m} :de n à m occurences

/^\d{3}$/.test('123'); //true
/^\d{3,}$/.test('12345'); // true
/^\d{3,5}$/.test('123456'); // false
/^\d{3,5}\.[2-4]{2}$/.test('1234.56'); // false
/^\d{3,5}.{0,}[2-4]{2}$/.test('123aaaaaa.33'); // true

// RACCOURCIS
    // ? : {0,1}
    // + : {1,}
    // * : {0,}

/^\w*\d?$/.test('2'); // true
/^\w*\d?$/.test('salut33'); // true
/^\w*\d?$/.test('$$'); // true
/^\w*\d$/.test('3z3'); // true
/^\w*\d$/.test('z3z'); // false
/^\w*\D$/.test('3z3'); // false
/^\w*\D$/.test('z3z'); // true

// Groupe
    // () double effet kisskool
    // 1. rassemblement

/^(0\.)?\d+$/.test('0.33'); // true
/^(0\.)?\d+$/.test('33'); // true
/^0\.?\d+$/.test('33'); // false
/^(0\.)?\d+$/.test('.33'); // false
/^(0\.)?\d+$/.test('.33'); // 

// 2. groupe remarquable

    '01/05/2000'.replace(/^(\d\d)\/(\d\d)\/(\d\d\d\d)$/,'$3-$2-$1');
    //"2000-05-01"

// Ou |

/^1|1$/.test('123'); // true
/^1|1$/.test('231'); // true
/^(12|24)$/.test('12'); // true





// exercices 
// 1
/^(3+\.)*3+$/

// Donne:
// OK
// 3333
// 3.3.3
// 33
// KO
// ..3
// 3..3
// 3.
// .3

//2
/^(\d{1,3}\.){3}(\d{1,3})$/

// Donne:
// OK 
// 1.1.12.999
// 999.999.999.999
// 1.0.345.234
// 00.000.0.00

// KO

// 1
// 1.12
// 1.12.12.
// 12.12..12
// 12.1.1.1.
// .12.1.1.1.

// 3
/^[+-]?[1-9]\d*$/

// Donne 
// OK
// 23
// 5
// +234
// -123
// 100

// KO
// 0
// 0123
// 123.2
// aze
// 12-

//3
/^([0-9]|1[0-5])$/

// Donne
// OK 
// 8
// 0
// 14
// 4

// KO
// -12
// 16
// 02

// 4
/*
/^(0?[1-9]|[12]\d|3[01])$/

Donne: 
    OK 
    1
    01
    23
    31
    9
    19
    29

    KO
    0
    00
    32

*/

// 5.
/*
/^\w+(\.\w+)*@\w+(\.\w+)*\.\w{2,}$/

Donne :
    OK
        a@a.com
        a.a@a.com
        a.a.a@a.a.A.be

    KO
        @.com
        .@.com
        a@a@a.com
        a@a.b
        a@a..com
 */