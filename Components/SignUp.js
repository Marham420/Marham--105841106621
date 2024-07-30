import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

const SignUp = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Nama" style={styles.textInput}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.textInput}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Password" style={styles.textInput}/>
            </View>
            <View style={styles.AlreadyTextContainer}>
                <Text style={styles.AlreadyText}>Sudah punya Akun ?</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15 }}>SIGN IN</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingHorizontal: 25,
        paddingVertical: 35, 
        backgroundColor: "#FAFAD2", 
    },

    text: { 
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign: "flex-start", 
        justifyContent: "center",
        marginBottom: 20,
        color: "#8B4513" 
    },

    textInput: {
        fontSize: 15,
        height: 50,
        borderColor: "#BDB76B", 
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

    button: { 
        backgroundColor: "#FF4500", 
        padding: 15,
        marginTop: 20,
        borderRadius: 15,
        top: 230
    },

    socialTextContainer: {
        marginTop: 20,
        alignItems: "center"
    },
    
    socialText: {
        fontSize: 15,
        color: "#696969" 
    },
});

export default SignUp;
