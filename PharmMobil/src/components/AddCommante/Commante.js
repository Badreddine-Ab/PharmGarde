
import {Text,View,Modal,TextInput,Button} from "react-native"
import React,{useState} from "react";
import styles from "../../../steles/StyleComment"; 


export default function Commante () {
    const [open,setOpen]=useState(false)
   
  return (
   <View style={styles.container}>
        <Text> add commantair </Text>
        <TextInput style={styles.input} placeholder="UserName" />
        <TextInput style={styles.input_2} placeholder="Commante" />
        <View >
        <Button 
      
          title="Click "
          color="#1c95b2"
          onPress={()=>setOpen(true)}/>
    </View>
        
   
        <Modal visible={open}>
            <View> style={styles.container}
                <Text style={{fontSize:20}}> commente add </Text>
                <Button  title="Close" onPress={()=>setOpen(false)}/>
            </View>
        </Modal>
   </View>

  );
}

