function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function login(formEvent) {
    var name = formEvent.target.textBoxName.value;
    var gender = formEvent.target.textBoxGender.value;
    var username = formEvent.target.textBoxUsername.value;
    var password = formEvent.target.textBoxPassword.value;

    if(name && gender && username && password){
        setUserUrl(name, gender, username);
        isLoggedIn()
    }
}
function isLoggedIn() {
    return getParameterByName('name', window.location.href)
}
function logout(){
    window.location.href = getCurrentUrlWithoutQueryparams()
}

function setUserUrl(name, gender, username){
    window.location.href = getCurrentUrlWithoutQueryparams() + "?name=" + name + "&gender=" + gender + "&username=" + username;
}

function getCurrentUrlWithoutQueryparams() {
    return window.location.href.split('?')[0]
}

function goTo(url){
        var base_url = window.location.href.split('Finntech')[0] + 'Finntech/';
        if(isLoggedIn()){
            window.location.href =
                base_url +
                url +
                "?name=" + getParameterByName('name') +
                "&gender=" + getParameterByName('gender') +
                "&username=" + getParameterByName('username')
        } else {
            window.location.href = base_url + url
        }
}