import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    title:{
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#2e2e39",
        height: 19,
        // backgroundColor: 'blue'
    },
    text:{
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#787993",
        paddingVertical: 0,
        height: 19,
        textAlign: 'right',
        // backgroundColor: 'red',
        minWidth: "45%"
    }
})

export default styles