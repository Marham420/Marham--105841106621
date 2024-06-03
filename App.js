import { StyleSheet,Text, View } from "react-native";
import React from "react";
const App = () => {
  return (

    <View style = {{
      flex: 1, 
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
    }}>
      <View style = {{
        backgroundColor:"purple", 
        width: 125, 
        height: 60,
        justifyContent: "center",
        borderRadius: 20,
        marginRight: 20,
        marginBottom:20,
      }}>
        <Text style = {{
          fontSize: 20, color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}>Masuk</Text>
      </View>

      <View style = {{
        backgroundColor: "purple", 
        width:125, 
        height: 60,
        justifyContent: "center",
        borderRadius: 20,
        marginLeft: 20,
        marginBottom: 20,
      }}>
        <Text style = {{
          fontSize: 20, color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}>Daftar</Text>
      </View>
    </View>
  );
};
export default App;