const admin = require('firebase-admin');
const db = admin.firestore();

class Commentaire {
  static async findAll() {
    const commanterRef = db.collection('commante');
    const snapshot = await commanterRef.get();
    return snapshot.docs.map((doc) => doc.data());
  }

}


module.exports = Commentaire;