var userID;
var user_name = getParameterByName('name', window.location.href);
var user_userName = getParameterByName('username', window.location.href);
var user_gender = getParameterByName('gender', window.location.href);

function bankClicked(){
    $(".bankSubmit").on( "click", function() {
        if($(".bankSubmit").hasClass('bg-basic-4')) {
            $(".bankSubmit").removeClass('bg-basic-4')
        }
        else{
            $(this).toggleClass('bg-basic-4');
        }
    })
}


function setNewBalance(){
    var quantity = $('input.quantity').val();
    var IBAN = $('input.IBAN').val();
    var bank = $('.bankSubmit.bg-basic-4').attr('bank');
    var fromBank = $('.fromBank').attr('fromBank');
    var fromUser = user_userName;
    console.log(fromBank + 'dir is deee')


    if(bank){
        moveMoney(fromBank, bank, quantity, fromUser)
             .then(function () {
                 goTo('index.html')
             });
    }
    else if(IBAN) {
        transferMoney(fromBank, IBAN, quantity, fromUser)
             .then(function () {
                 goTo('index.html')
             });
    }
    else {
        alert('ERROR: StatusCode 404 Bank Not Found')
    }
    // else if IBAN === valid
        // send zooi
        // REFRESH
    // else
        // alert LOL
}

if(user_name && user_userName && user_gender) {
    findUserInCollection(user_userName)
        .then(function(user){
            if(!user) {
                alert('username wrong!');
                logout()
            }
            else {
                alert('authenticated');
                var ABN = buildTemplateAccount(user, 'ABN');
                var SNS = buildTemplateAccount(user, 'ING');
                var ING = buildTemplateAccount(user, 'SNS');

                userID = user.userID;

                var balance_ABN = parseInt(user.accounts.ABN.balance1September);
                var balance_SNS = parseInt(user.accounts.SNS.balance1September);
                var balance_ING = parseInt(user.accounts.ING.balance1September);
                var balance = balance_ABN + balance_ING + balance_SNS;
                var Balance = buildTotalBalance(balance, user);
                $('div.totalBalance').html(Balance);

                var connected_apps = connectedApps();


                $('#connectedApps').html(connected_apps);
                $('#templateAccounts_1').html(ABN);
                $('#templateAccounts_2').html(ING);
                $('#templateAccounts_3').html(SNS);
                $('#welkomUser').html('Welkom ' + user.firstName + '!')
                //return buildTemplateAccounts(user)
            }
        })
    .then(function(){
        initializePopup();
        bankClicked();
    });
}

$(document).ready(function () {

    initializePopup();

    //zopim support
    window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
        d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
    _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
        $.src="https://v2.zopim.com/?5aaqm1nQtR3vQ3D52MQNegSez64XAzSL";z.t=+new Date;$.
            type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

    $('.ui.accordion')
        .accordion();

    var $form = $('.ui.form');

    $form.form(getFormObject());

    $('form#formSubmit').submit(function(event){
        event.preventDefault();
        login(event)
    });


    if(isLoggedIn()) $('#signIn').html('Login met een ander account');




});