module.exports = {
    path: 'homeRemedies.csv', // Your CSV file name
    firebase: {
        credential: 'myServiceAccountKey.json', // Your service account file name
        collection: 'dadiKeNushke', // target Collection in Firestore
    },
    mapper: (dataFromCSV) => { // Mapper Method as optional field
        return dataFromCSV // Return data for saving in Firestore
    }
}