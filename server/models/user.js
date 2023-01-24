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
      const query = await user.where(field, "==", value).get();
      return query.docs[0];
    } catch (error) {
      return error
    }
  }
}
module.exports = Authentification;
