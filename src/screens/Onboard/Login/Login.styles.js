import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        paddingHorizontal: 32,
        justifyContent: "center"

    },
    logoContainer:{
        maxHeight:25,
        flexDirection: "row",
        justifyContent: "center",
    },
    inputContainer: {
        maxHeight: 120,
        marginTop: 40,
        flexDirection: "column",
        justifyContent: "center"
    },
    loginContainer:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: 36,
        marginTop: 10,
    },
    registerContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    passwordButton:{
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(39, 127, 162, 0.15)',
        borderBottomWidth: 2,
        height: 32,
    },
    passwordButtonText:{
        fontSize: 15,
        letterSpacing: 0.2,
        color: '#277fa2',
        fontWeight: "600"
    },
    loginButton:{
        height: 36,
        width: 91,
        backgroundColor: '#277fa2',
        shadowColor: 'rgba(42, 55, 71, 0.15)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 1,
        borderRadius: 20.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonText:{
        fontSize: 15,
        letterSpacing: 0.2,
        color: '#ffffff',
        fontWeight: "600"
    },
    registerButton:{
        borderBottomColor: 'rgba(39, 127, 162, 0.15)',
        borderBottomWidth: 2,
        height: 32,
        width: 83,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButtonText:{
        fontSize: 15,
        letterSpacing: 0.2,
        color: '#277fa2',
        fontWeight: "600"
    },
    registerButtonCap:{
        fontSize: 15,
        letterSpacing: 0.2,
        color: '#9c9c9c',
        fontWeight: "600",
        justifyContent: 'center',
        alignItems: 'center',
        width: 135
    }

});

export default styles