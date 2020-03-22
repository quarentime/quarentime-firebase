const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

// Register existing user on firestore
exports.createUser = functions.auth.user().onCreate((user) => {
    const db = admin.firestore();
    let docRef = db.collection('users').doc(user.uid);

    docRef.set(
        {
            'id': user.uid,
            'email': user.email,
            'name': user.displayName,
            'days_in_quarantine': 0,
            'days_in_post_quarantine': 0
        }
    )
    .catch((err) => {
        console.log(err);
    })
});
