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
    registerButtonCap:{
        fontSize: 15,
        letterSpacing: 0.2,
        color: '#9c9c9c',
        fontWeight: "600",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    }

});

export default styles