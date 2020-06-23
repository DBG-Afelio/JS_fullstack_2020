const dataEmail = {
    name : "Email",
    regex : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/,
    tabSuccess : [
        'dbg@gmail.com',
        'dbg@gmail.co.uk',
        'dbg@gmail.brussels',
        'dbg.s@gmail.brussels',
    ],
    tabFail : [
        'dbg.@gmail.com', 
        'd@b@gmail.com', 
        'd@b@gmail..com',
        '@gmail.com', 
        'dbg@gmail.c', 
        'dbg@@gmail.com', 
        'dbg.gmail.com', 
        'dbg$@gmail.com',
        'dbg@.gmail.com',
        'dbg@gmailcom',
        '.a@gmailcom',
    ]
};

const dataPhone = {
    name : "Telephone",
    regex : /^((00|\+)32|0){1}([1-9]{1})\d{5,9}$/,
    tabSuccess : [
        '+324123456',
        '00324123456',
        '04123456',
        '04123456798',
    ],
    tabFail : [
        '+334123456',
        '003204123456',
        '0032412x456',
        '32412x456',
        '+3241234',
        '+32412345678910',
    ]
};

const dataLogin = {
    name : "Pseudo",
    regex : /^[a-zA-Z0-9_\-!\$]{6,10}$/,
    tabSuccess : [
        'Cap_132',
        'cap_123465',
        'ca_12345',
        '_789456',
        '_-89!5$',
    ],
    tabFail : [
        '+789456',
        'cap_3',
        'cap_1234567',
    ]
};

function validatationItem(item, regex) {
    return regex.test(item);
}

function testValidate(data) {
    console.log(`**** ${data.name} ***`);
    console.log('--SUCCESS--');
    data.tabSuccess.forEach((item) => {
        if (validatationItem(item, data.regex)) {
            console.log (`OK -> ${item} valid`);
        } else {
            console.log (`KO -> ${item} valid`);
        }
    })
    console.log('--FAIL--')
    data.tabFail.forEach((item) => {
        if (!validatationItem(item, data.regex)) {
            console.log (`OK -> ${item} invalid`);
        } else {
            console.log (`KO -> ${item} invalid`);
        }
    })
}

testValidate(dataEmail);
testValidate(dataPhone);
testValidate(dataLogin);
