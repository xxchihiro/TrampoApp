import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 32,
        backgroundColor: '#fafafa',
        paddingTop: 40,
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
    inputContainer:{
        marginTop: 30
    }
})

export default styles