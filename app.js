const csvFilePath='./homeRemedies2.csv';
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const csv=require('csvtojson');
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    let i = 43;
    jsonObj.forEach((remedy) => {
        db.collection('dadiKeNuske').doc(i.toString()).set(remedy).then(()=> console.log('Success!')).catch(
            (err)=> console.log(err)
        );
i++;
    });

})
