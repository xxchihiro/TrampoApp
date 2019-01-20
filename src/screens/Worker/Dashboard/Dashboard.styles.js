import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 32,
        paddingTop: 70
    },
    topContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    week:{
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: -0.54,
        color: "#8b8b8b"
    },
    hour:{
        fontSize: 20,
        fontWeight: "700",
        fontStyle: "normal",
        letterSpacing: 0.5,
        color: "#2e2e39"
    },
    QRButton:{
        height: 40,
        width: 40,
        backgroundColor: '#277fa2',
        shadowColor: 'rgba(46, 102, 231, 0.35)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        borderRadius: 34,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        marginTop: 45
    },
    cardCaption:{
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a",
    }
})

export default styles