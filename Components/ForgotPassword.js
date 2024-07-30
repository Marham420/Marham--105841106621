import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

const ForgotPassword = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.instructions}>You can try requesting verification using your email or phone number!</Text>
            <View style={styles.inputWrapper}>
                <TextInput placeholder="Enter Email or Phone Number" style={styles.inputField}/>
            </View>
            <View style={styles.altTextWrapper}>
                <Text style={styles.altText}>Gunakan Nomor Handphone ?</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingHorizontal: 25,
        paddingVertical: 35, 
        backgroundColor: "#FFFACD", 
    },

    title: { 
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign: "center",
        marginTop: 100, 
        marginBottom: 20, 
        color: "#8B0000" 
    },
    
    instructions: {
        fontSize: 16, 
        color: "#A52A2A",
        textAlign: "center",
        marginTop: 20, 
        marginBottom: 20
    },
    
    inputWrapper: {
        marginBottom: 20,
        marginTop: 50
    },

    inputField: {
        fontSize: 15,
        height: 50,
        borderColor: "#8B4513", 
        borderWidth: 1,
        padding: 10,
        width: "100%",
        borderRadius: 10,
    },

    altTextWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 50
    },

    altText: {
        fontSize: 15,
        color: "#4682B4"
    },

    button: { 
        backgroundColor: "#DC143C",
        padding: 15,
        borderRadius: 15,
        alignItems: "center"
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    },
});

export default ForgotPassword;
