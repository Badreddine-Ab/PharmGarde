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
    try {
      const query = user.where(field, "==", value);
      const snapshot = await query.get();
      return snapshot.docs[0];
    } catch (error) {
      return error
    }
  }
}
module.exports = Authentification;
