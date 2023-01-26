const admin = require('firebase-admin');
const db = admin.firestore();

class Pharmacy {
  static async findAll() {
    const pharmaciesRef = db.collection('pharmacies');
    const snapshot = await pharmaciesRef.get();
    return snapshot.docs.map((doc) => doc.data());
  }

  static async find() {
    const pharmaciesRef = db.collection('pharmacies');
    const snapshot = await pharmaciesRef.get();
    return snapshot;
    // .docs.map((doc) => doc.data())
  }

  static async create(pharmacyData) {
    const pharmaciesRef = db.collection('pharmacies');
    const addedDoc = await pharmaciesRef.add(pharmacyData);
    return addedDoc.id;
  }

  static async findById(id) {
    const pharmaciesRef = db.collection('pharmacies');
    const doc = await pharmaciesRef.doc(id).get();
    return doc.data();
  }

  static async update(id, pharmacyData) {
    const pharmaciesRef = db.collection('pharmacies');
    await pharmaciesRef.doc(id).update(pharmacyData);
  }

  static async delete(id) {
    const pharmaciesRef = db.collection('pharmacies');
    await pharmaciesRef.doc(id).delete();
  }
}


module.exports = Pharmacy;