import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        paddingTop: 50,
        paddingHorizontal: 32
    },
    jobTitle:{
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.48,
        color: "#2e2e39",
        marginTop: 40
    },
    caption:{
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.21,
        color: "#cbc9d5",
        marginTop: 24
    },
    content:{
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 23,
        letterSpacing: -0.27,
        color: "#2e2e39"
    },
    supervisorContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer:{
        width: 45,
        height: 45,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.12)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        marginTop: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage:{
        width: "90%",
        height: "90%",
        borderRadius: 4,

    },
    locationContainer:{
        height: 48,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(233, 231, 241, 0.62)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 15,
        shadowOpacity: 1,
        marginTop: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    location:{
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: -0.27,
        color: "#2e2e39"
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 37
    },
    button:{
        width: 145,
        height: 45,
        borderRadius: 25,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(233, 231, 241, 0.62)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 15,
        shadowOpacity: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accept:{
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.4,
        color: "#277fa2"
    },
    decline:{
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.4,
        color: "#d75e34"
    },
    declineIcon:{
        marginTop: 2,
        marginRight: 3
    },
    acceptIcon:{
        marginTop: 2,
        marginRight: 3
    }
})

export default styles