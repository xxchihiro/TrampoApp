import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fafafa",
        paddingTop: 40,
        paddingHorizontal: 32
    },
    topBar:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logout:{
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.76,
        color: "#9b9b9b"
    },
    edit:{
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#277fa2"
    },
    nameContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24
    },
    imageContainer:{
        width: 79,
        height: 79,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.12)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage:{
        width: "90%",
        height: "90%",
        borderRadius: 5
    },
    textContainer:{
        marginLeft: 15
    },
    name:{
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: -0.2,
        color: "#2e2e39"
    },
    email:{
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0.4,
        color: "#787993"
    },
    divider:{
        height: 1,
        width: "100%",
        backgroundColor: '#d3d9e0',
        marginTop: 18,
    },
    basicInfoContainer:{
        marginTop: 30
    }
})

export default styles