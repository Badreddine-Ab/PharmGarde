import { Text, View, Modal, TextInput, Button,TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../../steles/StyleComment";
import { POST } from "../../Api/Axios";

export default function Commante() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [Error, SetError] = useState();

  const [user, setUser] = useState({});
  const onChangeName = (value) => {
    setUser({ ...user, name: value });
  };
  const onChangeCommentaire = (value) => {
    setUser({ ...user, commantair: value });
  };
  const saveData = () => {
    setLoading(true);
    console.log({ name: user.name,
      commantair: user.commantair})
        POST('Commentaires/add',{ name: user.name,commantair: user.commantair})
      .then((response) => {
        (response.status == 201)?setSuccess(response.data):SetError(response.data)
        setLoading(false)
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (

    <View style={styles.container}>
      {Error && <Text style={{backgroundColor:'red'}}>{Error}</Text>}
      {success && <Text style={{backgroundColor:'#87E1C7'}}>{success}</Text>}
      <Text> add commantair </Text>
      <TextInput style={styles.input} 
      onChangeText={(value) => onChangeName(value)}
       placeholder="UserName" />
      <TextInput
        style={styles.input_2}
        onChangeText={(value) => onChangeCommentaire(value)}
        placeholder="Commante"
      />
     
      <TouchableOpacity  onPress={saveData} >
        <View style={{ backgroundColor: '#1c95b2', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {loading ? 'loading...' : 'Save'}
          </Text>
        </View>
      </TouchableOpacity>
 
    </View>
  );
}
