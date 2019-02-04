import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1,
        paddingTop: 15,
        paddingBottom: 20,
        // backgroundColor: 'red'
    },
    textContainer:{
        marginLeft: 15
    },
    jobTitle:{
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a"
    },
    jobTime:{
        fontSize: 11,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0.37,
        color: "#9b9b9b"
    },
    tagContainer:{
        // backgroundColor: 'blue',
        marginLeft: 'auto'
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