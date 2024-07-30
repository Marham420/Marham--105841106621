import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

const Login = () => {
    return (
        <ScrollView contentContainerStyle = { styles.container }>
            <Text style = { styles.text }> Masuk </Text>

             <View style = { styles.inputContainer }>
                <TextInput placeholder="Masukkan Email" style = { styles.textInput}/></View>

             <View style = { styles.inputContainer }>
                <TextInput placeholder="Masukkan Password" style = { styles.textInput}/></View>
        <View style = { styles.AlreadyTextContainer}>
            <Text style = { styles.AlreadyText}> Lupa Password ? </Text>
        </View>
            <TouchableOpacity style = { styles.button }>
                <Text style = {{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15}}>Log In</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingHorizontal: 25,
        paddingVertical: 35, 
        backgroundColor: "#ADD8E6", 
    },

    button: { 
        backgroundColor: "#FF6347", 
        padding: 15,
        marginTop: 20,
        borderRadius: 15,
        top:230
    },

    text: { 
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign: "flex-start", 
        justifyContent: "center",
        marginBottom: 20,
        color: "#2F4F4F"
    },

    textInput: {
        fontSize: 15,
        height: 50,
        borderColor: "#4682B4",
        borderWidth: 1,
        padding: 10,
        width: "100%",
        borderRadius: 10,
        color: "#000000"
    },

    inputContainer: {
        marginBottom: 20,
        top: 150
    },

    AlreadyText: {
        fontSize: 15,
        color: "#1E90FF"
    },
    
    AlreadyTextContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 10,
        top: 150
    },

    socialTextContainer: {
        marginTop: 20,
        alignItems: "center"
    },
    
    socialText: {
        fontSize: 15,
        color: "#696969"
    },

    }
);

export default Login;
