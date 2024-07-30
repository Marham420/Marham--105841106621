import { StyleSheet,Text, View, Image } from "react-native";
import React from "react";
const App = () => {
  return (

    <View style = {{ 
      flex: 1,
      justifyContent:"center",
      alignItems: "center",
    }}>
      <Text style = {{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        position: "center",
        top: 160,
      }}>Selamat Datang
      </Text>
      <Image
        source = {require('./assets/Marham Shop.png')}
        style = {{width: 200, height: 200, marginBottom: 20, top :200, borderRadius: 50, }}
        />
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
    </View>
  );
};
export default App;