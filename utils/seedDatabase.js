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
    var ibanSlice = IBAN.slice(4,8);
    var Password = 12345678;
    var Color;
    if(ibanSlice == 'AMST')Color = '#009688';
    else if(ibanSlice == 'SNSB')Color = '#EF6C00';
    else if(ibanSlice == 'INGB')Color = '#7E57C2';

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
            bank: {
                IBAN: IBAN,
                bank: ibanSlice,
                minimumBalance: MinimumBalance,
                balance1September: BalanceSeptember1,
                color: Color
            }
        }
    })
});

console.log(newJson);
fs.writeFile('../utils/new_Json.json', JSON.stringify(newJson), function(err, res){});