import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        height: 96,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        shadowColor: "#e9e7f1",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 15,
        shadowOpacity: 1,
        marginTop: 12,
    },
    mask:{
        height: 96,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        overflow: "hidden",
        flex: 1,
        flexDirection: 'row'
    },
    blueline:{
        height: 96,
        width: 6,
        backgroundColor: "#277fa2",
    },
    greyline:{
        height: 96,
        width: 6,
        backgroundColor: "#949494",
    },
    textContainer:{
        height: 96,
        paddingTop: 14,
        paddingLeft: 18
    },
    title:{
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#2e2e39"
    },
    time:{
        fontSize: 13,
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#bababa"
    },
    location:{
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#bababa"
    }
})

export default styles