

//function buildBankTemplate(user, bankName) {
//    var bank_user = user['accounts'][bankName];
//    var bank_IBAN = bank_user['IBAN'];
//    var bank_bank = bank_user['bank'];
//    var bank_balance1September = bank_user['balance1September'];
//    var bank_color = bank_user['color'];
//    var bank_minimumBalance = bank_user['minimumBalance'];
//}
//




function buildTemplateAccount(user, bankType){
    var bank = user['accounts'][bankType];

    var popopo;
    if(bank.bank === 'ABN') popopo = 'popopo';
    if(bank.bank === 'SNS') popopo = 'popopo-right';
    if(bank.bank === 'ING') popopo = 'popopo-left';


    //ABN rekening
    var bankName = bank.bank;
    var balance = Number(bank.balance1September).toFixed(2);
    console.log(balance);
    var IBAN = bank.IBAN;
    var color = bank.color;
    var minimumBalance = bank.minimumBalance;
    var img = bank.img
    console.log(img + 'dit is img');


    //Other Bank Accounts
  // var ING_balance =
  // var ABN_balance =
  // var SNS_balance =

    //User gegevens
    var bank_birthdate =  user['birthdate'];
    var bank_city =  user['city'];
    var bank_company =  user['company'];
    var bank_firstNam =  user['firstName'];
    var bank_function =  user['function'];
    var bank_gender =  user['gender'];
    var bank_initials =  user['initials'];
    var bank_lastLogin =  user['lastLogin'];
    var bank_lastNam =  user['lastName'];
    var bank_latestContact =  user['latestContact'];
    var bank_password =  user['password'];
    var bank_phoneNumber =  user['phoneNumber'];
    var bank_province =  user['province' ];
    var bank_streetAddress =  user['streetAddress'];
    var bank_userID =  user['userID'];
    var bank_username =  user['username'];
    var bank_zipcode =  user['zipcode'];
   //console.log(user);

 var template = '';
 template +=
    '  <div id="templateAccounts">' +
     '    <div class="p-18 bg-basic-1 materialize-1 text-18px" style="overflow: hidden;">' +
     '      <h3>'+ bankName +'</h3>' +
     '      <div class="statistic">' +
     '        <div class="value">' +
     '          <div class="ui grid">' +
     '            <div class="row">' +
     '              <div class="ten wide column">' +
     '                Netto Balance:' +
     '              </div>' +
     '              <div class="six wide column text-18px">' +
     '                <span class=" weight-bold balance"><i class="euro sign icon"></i>'+ balance +'</span>' +
     '                <img src="'+ img +'" alt="" class="width-112 height-82 pull-over layer-1 pull-up x3" style="float:right; opacity: .08">' +
     '              </div>' +
     '            </div>' +
     '          </div>' +
     '        </div>' +
     '      </div>' +
     '      <div class="ui grid">' +
     '        <div class="row mt-18">' +
     '          <div class="column">' +
     '            <div class="ui button materialize-1 bg-basic-1 hover '+ popopo +'">Betaalverzoek</div>' +
     '            <div class="ui  popup pull-over layer-3" data-content="betaalVerzoek" style="position:relative!important;font-family: Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif!important;">' +
     '              <div class="header">' +
     '                <div class="ui grid">' +
     '                  <div class="row">' +
     '                    <div class="column">' +
     '                      <h3>Betaalverzoek</h3>' +
     '                      <div class="ui divider mb-12"></div>' +
     '                      <label for="">Amount: </label><input type="number" name="quantity" min="0.01" max="99999999" class="br-4 p-6 mb-18 max-width-82">' +
     '                      <div class="bg-basic-1 width-300">' +
     '                        <p class="text-14px weight-bold">Made available by:</p>' +
     '                        <img src="assets/tikkie-app-logo%20(1).png" alt="" class="height-42 pull-up x2c" style="float:right">' +
     '                      </div>' +
     '                      <p class="text-14px">Send to:</p>' +
     '                      <div class="ui middle aligned selection list">' +
     '                        <div class="item">' +
     '                          <i class="user icon"></i>' +
     '                          <div class="content">' +
     '                            <div class="header">Helen</div>' +
     '                          </div>' +
     '                        </div>' +
     '                        <div class="item">' +
     '                          <i class="user icon"></i>' +
     '                          <div class="content">' +
     '                            <div class="header">Christian</div>' +
     '                          </div>' +
     '                        </div>' +
     '                        <div class="item">' +
     '                          <i class="user icon"></i>' +
     '                          <div class="content">' +
     '                            <div class="header">Daniel</div>' +
     '                          </div>' +
     '                        </div>' +
     '                        <p class="text-14px mt-12">Send to IBAN:</p>' +
     '                        <input type="text" name="" placeholder="IBAN" class="p-6 br-4">' +
     '                        <div class="ui button green" style="float:right">Send!</div>' +
     '                        <p class="text-14px mt-12">Send with Whatsapp or Facebook:</p>' +
     '                        <img src="assets/whatsapp.png" alt="" class="height-48">' +
     '                        <img src="assets/facebook_logos_PNG19761.png" alt="" class="height-48">' +
     '                      </div>' +
     '                    </div>' +
     '                  </div>' +
     '                </div>' +
     '              </div>' +
     '            </div>' +
     '            <div class="ui button materialize-1 bg-basic-1 hover popopo-right" style="float:right">Overschrijven</div>' +
     '            <div class="ui popup pull-over layer-4 ml-36" data-content="overSchrijven" style="position:relative;font-family: Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif!important;">' +
     '              <div class="header">' +
     '                <div class="ui grid">' +
     '                  <div class="row">' +
     '                    <div class="column">' +
     '                      <h3>Overschrijven</h3>' +
     '                      <div class="ui divider mb-12"></div>' +
     '                      <label for="">Amount: </label><input type="number" name="quantity" min="0.01" max="99999999" class="br-4 p-6 mb-18 max-width-82 quantity">' +
     '                      <div class="bg-basic-1 width-300">' +
     '                        <p class="text-14px weight-bold">Made available by:</p>' +
     '                        <img src="assets/tikkie-app-logo%20(1).png" alt="" class="height-42 pull-up x2c" style="float:right">' +
     '                      </div>' +
     '                      <p class="text-14px">Send to:</p>' +
     '                      <div class="ui middle aligned selection list">' +
     '                        <div class="item bankSubmit" bank="ING">' +
     '                          <i class="user icon"></i>' +
     '                          <div class="content ">' +
     '                            <div class="header ">' +
     '                              ING <span class="ml-36">- </span>' +
     '                            </div>' +
     '                          </div>' +
     '                        </div>' +
     '                        <span style="display:none" class="fromBank" fromBank="'+ bankName +'"></span>' +
     '                        <div class="item bankSubmit" bank="SNS">' +
     '                          <i class="user icon"></i>' +
     '                          <div class="content">' +
     '                            <div class="header">' +
     '                              SNS <span class="ml-36">- </span>' +
     '                            </div>' +
     '                          </div>' +
     '                        </div>' +
     '                        <p class="text-14px mt-12">Send to IBAN:</p>' +
     '                        <input type="text" name="" placeholder="IBAN" class="p-6 br-4 IBAN">' +
     '                        <div class="ui button green" onclick="setNewBalance()" style="float:right">Send!</div>' +
     '                      </div>' +
     '                    </div>' +
     '                  </div>' +
     '                </div>' +
     '              </div>' +
     '            </div>' +
     '          </div>' +
     '        </div>' +
     '      </div>' +
     '      <div style="background-color: ' + color +'" class="height-112 m--64">' +
     '      </div>' +
     '    </div>' +
     '  </div>';

   //console.log(bank_user)
    return template
}


function buildTotalBalance(balance, user){
    console.log(balance)
    var initials = user.initials;
    var firstname = user.firstName;
    var lastname = user.lastName;
    var gender = user.gender
    var afkorting = ''
    if(gender === 'F'){
        afkorting = 'Mevr.'
    } else {
        afkorting = 'Dhr.'
    }

    console.log(initials)
    console.log(firstname)
    console.log(lastname)
    console.log(gender)
    var amount = balance;

    var template = '' +
        '      <div class="ui segment bg-b fg-basic-1 materialize-3">' +
        '        <h3>Total Balance:</h3>' +
        '        <div class="ui grid">' +
        '          <div class="row">' +
        '            <div class="ten wide column mt-12">' +
        '              <p class="text-16px weight-bold">'+afkorting+' '+initials+ ' '+ lastname +' P.S. Vos </p>' +
        '              <p class="text-16px">'+firstname+'</p>' +
        '            </div>' +
        '            <div class="six wide column mt-8">' +
        '              <div class="ui tiny statistics">' +
        '                <div class="statistic">' +
        '                  <div class="value p-6 br-4 materialize-1 ml-18 bg-basic-2">' +
        '                    <i class="euro sign small pr-6 icon weight-normal"></i> <span class="text-18px weight-bold totalBalance">'+ amount + '</span>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '          <div class="height-64 width-64" style="' +
        '          position:absolute;' +
        '          right: 150px;' +
        '          top: 50px;' +
        '          border: 32px solid transparent;' +
        '          border-right-color: #fbbd08;' +
        '          border-bottom-color: #fbbd08;' +
        '          padding: 0;' +
        '          transform: rotate(-45deg)' +
        '          ">' +
        '          </div>' +
        '        </div>' +
        '      </div>'
    return template

}

function connectedApps(){
    var template = '<div class="row text-center">\n' +
        '\t\t\t<div class="column">\n' +
        '\n' +
        '\t\t\t\t<div class="ui steps">\n' +
        '\t\t\t\t\t<div class="completed step">\n' +
        '\t\t\t\t\t\t<i class="payment icon"></i>\n' +
        '\t\t\t\t\t\t<div class="content">\n' +
        '\t\t\t\t\t\t\t<div class="title">Je bent kredietwaardig!</div>\n' +
        '\t\t\t\t\t\t\t<div class="description">~ Geen huidige schulden ~</div>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t\t<div class="ui steps ml-24">\n' +
        '\t\t\t\t\t<div class=" step">\n' +
        '\t\t\t\t\t\t<i class="payment icon"></i>\n' +
        '\t\t\t\t\t\t<div class="content">\n' +
        '\t\t\t\t\t\t\t<div class="title">Je kunt maximaal 500.000 euro lenen!</div>\n' +
        '\t\t\t\t\t\t\t<div class="description">~ Annuïteiten, 30 jaar ~</div>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t\t<div class="ui steps ml-24">\n' +
        '\t\t\t\t\t<div class=" step">\n' +
        '\t\t\t\t\t\t<i class="building icon"></i>\n' +
        '\t\t\t\t\t\t<div class="content">\n' +
        '\t\t\t\t\t\t\t<div class="title">Huidige Studieschuld:</div>\n' +
        '\t\t\t\t\t\t\t<div class="description text-16px">30.367,29 euro</div>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t</div>\n' +
        '\t\t</div>';
    return template
}