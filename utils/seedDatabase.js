    var fs = require('fs');
var json = require('./accountData.json');

var newJson = {
    users: []
};

json.users.forEach(function (user) {
    var BalanceSeptember1 = user['BalanceSeptember1'];
    var BirthDate = user['BirthDate'];
    var City = user['City'];
    var Company = user['Company'];
    var CustomerID = user['CustomerID'];
    var Email = user['Email'];
    var FirstName = user['FirstName'];
    var Function = user['Function'];
    var Gender = user['Gender'];
    var IBAN = user['IBAN'];
    var Initials = user['Initials'];
    var LastLogin = user['LastLogin'];
    var LastName = user['LastName'];
    var LatestContact = user['LatestContact'];
    var MinimumBalance = user['MinimumBalance'];
    var PhoneNumber = user['PhoneNumber'];
    var Province = user['Province'];
    var StreetAddress = user['StreetAddress'];
    var Zipcode = user['Zipcode'];
    var Password = 12345678;

    newJson.users.push({
        username: Email,
        firstName: FirstName,
        streetAddress: StreetAddress,
        city: City,
        province: Province,
        zipcode: Zipcode,
        phoneNumber: PhoneNumber,
        lastName: LastName,
        lastLogin: LastLogin,
        latestContact: LatestContact,
        initials: Initials,
        userID: CustomerID,
        birthdate: BirthDate,
        company: Company,
        function: Function,
        gender: Gender,
        password: Password,
        accounts: {
            'ABN': {
                IBAN: IBAN,
                minimumBalance: MinimumBalance,
                balance1September: BalanceSeptember1,
                bank: 'ABN',
                color: '#009688',
                img: 'assets/abn-amro-logo.png'
            },
            'SNS': {
                IBAN: IBAN.replace('AMST', 'SNSB').slice(0, -5) + getRandomNumberBetween(10000, 99999),
                minimumBalance: MinimumBalance,
                balance1September: (BalanceSeptember1 * Math.random()).toFixed(2),
                bank: 'SNS',
                color: '#7E57C2',
                img: 'assets/sns_logo.png'
            },
            'ING': {
                IBAN: IBAN.replace('AMST', 'INGB').slice(0, -5) + getRandomNumberBetween(10000, 99999),
                minimumBalance: MinimumBalance,
                balance1September: (BalanceSeptember1 * Math.random()).toFixed(2),
                bank: 'ING',
                color: '#EF6C00',
                img: 'assets/ING_lion.png'
            }
        }
    })
});

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(newJson);
fs.writeFile('../utils/new_Json.json', JSON.stringify(newJson), function(err, res){});