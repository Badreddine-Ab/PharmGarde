const admin = require('firebase-admin');
const db = admin.firestore();

class Commentaire {
  static async find() {
    const commanterRef = db.collection('commante');
    const snapshot = await commanterRef.get();
    return snapshot.docs.map((doc) => doc.data());
  }

  static async create(commantairData) {
    const commantairRef = db.collection('commante');
    const addedDoc = await commantairRef.add(commantairData);
    return addedDoc.id;
  }

}



module.exports = Commentaire;