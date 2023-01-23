const admin = require('firebase-admin');
const db = admin.firestore();

class Pharmacy {
  static async findAll() {
    const pharmaciesRef = db.collection('pharmacies');
    const snapshot = await pharmaciesRef.get();
    return snapshot.docs.map((doc) => doc.data());
  }

  static async create(pharmacyData) {
    const pharmaciesRef = db.collection('pharmacies');
    const addedDoc = await pharmaciesRef.add(pharmacyData);
    return addedDoc.id;
  }
}


module.exports = Pharmacy;