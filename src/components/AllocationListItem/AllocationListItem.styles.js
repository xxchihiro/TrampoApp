import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderBottomColor: "#CBC9D5",
        borderBottomWidth: 1,
        height: 65,
        paddingTop: 15
    },
    tag:{
        width: 55,
        height: 17,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    tagtext:{
        fontSize: 8,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    tagtextConfirmed:{
        color: "#277fa2"
    },
    tagConfirmed:{
        borderColor: "#277FA2"
    },
    tagtextPending:{
        color: "#949494"
    },
    tagPending:{
        borderColor: "#949494"
    }
})

export default styles