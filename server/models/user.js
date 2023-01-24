const db=require('../config/database')
const user=db.collection("admin")
class Authentification {
 static async register(data){
  await user.add(data)
  };
  static async findAll(){
    const users = await user.get();
    return users.docs.map((doc) => doc.data());
  }
  static async findOne(params){
    return await user.doc(params).get().data();
  }
}
module.exports=Authentification

