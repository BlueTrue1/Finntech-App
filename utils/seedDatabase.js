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

    newJson.users.push({
        usernamr: Email,
        accounts: {
            ing: {
                iban: ''
            }
        }
    })
});

console.log(newJson);

fs.writeFile('../utils/new_Json.json', JSON.stringify(newJson), function(err, res){});