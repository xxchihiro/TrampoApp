import React from 'react'
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        paddingTop: 33,
        paddingHorizontal: 32,
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        backgroundColor: '#fafafa'
    },
    topContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: 30,
        // backgroundColor: 'red'
    },
    title:{
        fontWeight: "700",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#000000",
        paddingTop: 5
    },
    placeholder:{
        width: 30,
        height: 30
    },
    qrContainer:{
        alignItems: 'center',
        // backgroundColor: 'blue',
        paddingTop: 160,
        paddingBottom: 150
    },
    divider:{
        height: 1,
        backgroundColor: "#d3d9e0",
    },
    textContainer:{
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    text:{
        width: "60%",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: -0.5,
        textAlign: "center",
        color: "#8b8b8b",
        marginTop: 18
    }

})

export default styles