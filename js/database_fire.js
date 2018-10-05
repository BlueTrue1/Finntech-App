firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function getCollection(CollectionName) {
    return database.ref(CollectionName).once('value')
        .then(function (snapshot) {
            return snapshot.val()
        })
}

function setData(collectionName, setDataObject) {
    return database.ref(collectionName).update(setDataObject)
}

function setDataForUser(userId, data) {
    setData('/users/' + userId, data)
}

getCollection('/users')
    .then(function (data) {
       return buildTemplateAccounts(data)
    }).then(function (template) {
       $('#templateAccounts').html(template)
});





//setDataForUser(2, {
//    accounts: {
//        ing: {
//            balance: 77
//        }
//    }
//});