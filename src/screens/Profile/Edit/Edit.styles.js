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
    title:{
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#000000",
        marginLeft: 15
    },
    save:{
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#277fa2"
    },
    nameContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: 47,
        // backgroundColor: 'yellow'
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage:{
        width: "90%",
        height: "90%",
        borderRadius: 5,
    },
    badge:{
        width: 30,
        height: 30,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(42, 55, 71, 0.15)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 1,
        borderRadius: 50,
        position: 'absolute',
        top: -8,
        right: -8,
        justifyContent:'center',
        alignItems: 'center',
    },
    cameraIcon:{
        marginLeft: 1,
        marginTop: 3
    },
    textContainer:{
        width: "100%",
        // backgroundColor: 'blue',
        marginLeft: 15
    },
    name:{
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.4,
        color: "#2e2e39"
    },
    email:{
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0.4,
        color: "#787993"
    },
    inputContainer:{
        marginTop: 35
    },
    divider:{
        height: 1,
        backgroundColor: "#d3d9e0",
        marginVertical: 10
    },
    resetPassword:{
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#277fa2",
        marginTop: 40
    }
})

export default styles