const admin = require('firebase-admin');
const functions = require('firebase-functions');
const datamodel = require('./statuschangematrix').datamodel;

admin.initializeApp(functions.config().firebase);

// Register existing user on firestore
exports.createUser = functions.auth.user().onCreate((user) => {
    const db = admin.firestore();
    let docRef = db.collection('User').doc(user.uid);

    docRef.set(
        {
            'id': user.uid,
            'email': user.email,
            'Status': 'Healthy',
            'FinalStatus': 'Healthy'
        })
        .catch((err) => {
            console.log(err);
        })
});

// When the user status change, update contacts to reflect changes
exports.updateContactsOnStatusChanges = functions.firestore.document('/User/{userId}')
    .onUpdate(async (change, context) => {
        const oldValue = change.before.data();
        const newValue = change.after.data();
        const updatedUserId = context.params.userId;

        console.log(newValue);

        if (oldValue.FinalStatus == newValue.FinalStatus) {
            console.log('Statuses are the same. Doing nothing');
            return;
        }

        try {
            console.log('Statuses are different. Updating all the things');

            const db = admin.firestore();
            var snapshot = await db.collection('User')
                .doc(updatedUserId)
                .collection('Contacts')
                .get();

            snapshot.forEach(async (doc) => {
                // Update contact on target user collection
                await db.collection('User')
                    .doc(doc.id)
                    .collection('Contacts')
                    .doc(updatedUserId)
                    .update({ Status: newValue.FinalStatus });
            });

        } catch (error) {
            console.log(error);
        }
    });

// When the status of a contact change... (or a new contact is added)
exports.changeStatusBasedOnContactCreate = functions.firestore.document('/User/{userId}/Contacts/{contactId}')
    .onCreate(async (snap, context) => {
        const newValue = snap.data();
        const userIdToUpdate = context.params.userId;

        try {

            const db = admin.firestore();

            var snapshot = await db.collection('User')
                .doc(userIdToUpdate).get();

            userToUpdate = snapshot.data();

            console.log(userToUpdate);
            console.log(newValue);

            var newStatus = datamodel[userToUpdate.FinalStatus][newValue.Status];
            
            console.log(`New Status: ${newStatus}`);
            

            // We don't want to trigger unecessary updates
            if (newStatus == userToUpdate.FinalStatus) {
                return;
            }

            await db.collection('User')
                .doc(userIdToUpdate).update({ FinalStatus: newStatus });

        } catch (error) {
            console.log(error);
        }

        console.log(`Contact ${newValue.Name} creatd with status: ${newValue.Status}`);
    });

exports.changeStatusBasedOnContactUpdate = functions.firestore.document('/User/{userId}/Contacts/{contactId}')
    .onUpdate(async (change, context) => {
        const oldValue = change.before.data();
        const newValue = change.after.data();
        const userIdToUpdate = context.params.userId;

        if (oldValue.Status == newValue.Status) {
            return;
        }

        try {

            const db = admin.firestore();

            var snapshot = await db.collection('User')
                .doc(userIdToUpdate).get();

            userToUpdate = snapshot.data();



            var newStatus = datamodel[userToUpdate.FinalStatus][newValue.Status];

            // We don't want to trigger unecessary updates
            if (newStatus == userToUpdate.FinalStatus) {
                return;
            }

            await db.collection('User')
                .doc(userIdToUpdate).update({ FinalStatus: newStatus });

        } catch (error) {
            console.log(error);
        }

        console.log(`Contact ${newValue.Name} has changed status to: ${newValue.Status}`);
    });