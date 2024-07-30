import { StyleSheet, Text, View, TextInput } from "react-native-web";
import React from "react" ;
const TextInputCustom = ({ name, color}) => {
  return (
    <TextInput placeholder={` ${name}`} style={styles.input(color)} />
  );
}; 


const App = () => {
  return (
    <View style={styles.container}>

      <TextInputCustom
       name = "User" color = "red"/>
      <TextInputCustom
       name = "Email" color = "red"/>
      <TextInputCustom
       name = "Password" color = "red"/>
      </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center",
  },

  input: (color) => ({
    height: 50,
    width: 300,
    backgroundColor: "black",
    marginBottom: 10,
    borderRadius: 10,
    borderWidth:1,
    paddingLeft: 10,
    color: color,
  }),
});




export default App;