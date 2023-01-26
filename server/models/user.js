const db = require("../config/database");
const user = db.collection("admin");
class Authentification {
  static async register(data) {
    await user.add(data);
  }
  static async findAll() {
    const users = await user.get();
    return users.docs.map((doc) => doc.data());
  }
  static async findOne(field, value) {
      const users = await user.where(field, "==", value);
      return users.get().then(snapshot => {
        if (snapshot.empty) {
            return false
        } else {
          const doc = snapshot.docs[0];
          return {id: doc.id, data: doc.data()};
        }
      })
  }
  static async update(id, data) {
    await user.doc(id).update(data);
  }
}
module.exports = Authentification;
