








function buildTemplate(user){

    var bank_user = user['accounts'].bank;
    var bank_IBAN = bank_user['IBAN'];
    var bank_balance1Septembe = bank_user['balance1September'];
    var bank_bank = bank_user['bank'];
    var bank_color = bank_user['color'];
    var bank_minimumBalance = bank_user['minimumBalance'];

    var bank_birthdate =  user['birthdate'];
    var bank_city =  user['city'];
    var bank_company =  user['company'];
    var bank_firstNam =  user['firstNam'];
    var bank_function =  user['function'];
    var bank_gender =  user['gender'];
    var bank_initials =  user['initials'];
    var bank_lastLogin =  user['lastLogin'];
    var bank_lastNam =  user['lastNam'];
    var bank_latestContact =  user['latestContact'];
    var bank_password =  user['password'];
    var bank_phoneNumber =  user['phoneNumber'];
    var bank_province =  user['province' ];
    var bank_streetAddress =  user['streetAddress'];
    var bank_userID =  user['userID'];
    var bank_username =  user['username'];
    var bank_zipcode =  user['zipcode'];
   //console.log(user);

 //  var template = '';
 //  template +=
 //      '\t<div class="six wide column text-24px">\n' +
 //      '\t\t<span class=" weight-bold" style=""><i class="euro sign icon"></i>3.200</span>\n' +
 //      '\t\t<img src="assets/ING_lion.png" alt="" class="height-82 pull-over layer-1 pull-up x3" style="float:right; opacity: .05">\n' +
 //      '\t</div>';

   //console.log(bank_user)
    return template
}


function buildTemplateAccounts(users){
    var template= '';
    users.forEach(function(user) {
        template += buildTemplate(user);
        //console.log(template)
    }); return template
}
