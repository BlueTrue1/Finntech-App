firebase.initializeApp(firebaseConfig);

var database = firebase.database();


function getCollection(CollectionName) {
    return database.ref(CollectionName).once('value')
        .then(function (snapshot) {
            return snapshot.val()
        })
}

function findUserInCollection(userName) {
    return getCollection('/users')
        .then(function (users) {
            var userArray = Object.values(users);
            return userArray.filter(function(user){
                return user.username === userName
            })[0]
        })
}

function getUserKey(userName) {
    return getCollection('/users')
        .then(function (users) {
            var foundId;

            var userKeys = Object.keys(users);
            var userValues = Object.values(users);

            for(var i = 0; i < userValues.length; i++) {
                if(userValues[i].username === userName) {
                    foundId = userKeys[i]
                }
            }

            return foundId;
        })
}

function setData(collectionName, setDataObject) {
    return database.ref(collectionName).update(setDataObject)
}

function setBalanceForBank(userId, bank, newBalance) {
    console.log('setBalanceForBank', userId, bank, newBalance);
    setData('/users/' + userId + '/accounts/' + bank, { balance1September: newBalance })
}

function getBalance(userName, bank) {
    console.log(userName + 'niet te verklaren')
    console.log(bank + 'helemaal gek')
    return findUserInCollection(userName)
        .then(function(user){
            return user.accounts[bank].balance1September
        })
    //return getCollection('/users/' + userName + '/accounts/' + bank + '/balance1September')
    // finUserInCOllection(userName).then()
}

function moveMoney(fromBank, toBank, quantity, userName) {
    return reduceBalance(fromBank, quantity, userName)
        .then(function () {
            return addBalance(toBank, quantity, userName)
        })

}

function transferMoney(fromBank, toIBAN, quantity, userName) {
    return reduceBalance(fromBank, quantity, userName)
}

function reduceBalance(fromBank, quantity, userName) {
    return getBalance(userName, fromBank)
        .then(function (balance) {
            return  getUserKey(userName)
                .then(function (userId) {
                    return setBalanceForBank(userId, fromBank, Number(balance) - Number(quantity));
                })
        })
}


function addBalance(toBank, quantity, userName) {
    return getBalance(userName, toBank)
        .then(function (balance) {
            return getUserKey(userName)
                .then(function (userId) {
                    return setBalanceForBank(userId, toBank, Number(balance) + Number(quantity))
                })
        })
}

