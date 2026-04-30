import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TextInput
  
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const verificar = () => {
    console.log(email, senha)

    // claracloe@gmail.com
    // 1234
    if(email === "admin" && senha === "1234" ){
      alert("LOGIN VÁLIDO!!!")
    }else if (email === "" || senha === ""){
      alert("DIGITE O EMAIL OU SENHA!")
    }else {
      alert("EMAIL OU SENHA INVÁLIDOS!")
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./src/ImagemLogin.jpg")}
        style={{ flex: 1 }}
      >
        {/* <View style={styles.card}></View>
        <View style={styles.container_items}></View> */}
      </ImageBackground>
      <View style={styles.bottom}>
        <Text style={styles.text}>Welcome back!</Text>
    
        <TextInput
        style={styles.txtin}
          placeholder="Digite o seu email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
        style={styles.txtin}
          placeholder="Digite o sua senha"
          value={senha}
          onChangeText={(value) => setSenha(value)}
          secureTextEntry={true}
        />
        <Button title="LOGIN" color="#f194ff" onPress={verificar} />
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    backgroundColor: "#2b2b2bff",
    position: "relative",
    zIndex: 10,
    fontSize: 30
    
  },

  bottom: {
    flex: 1,
    backgroundColor: "#2b2b2bff",
    padding: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    position: "relative",
    margintop: 100,
    zIndex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  txtin: {
    height: 50,
    width: 200,
    backgroundColor: "#4c4c4dff",
    borderRadius: 10
  }



});


