import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container:{
        paddingTop: 40,
        paddingHorizontal: 32,
    },
    title:{
        fontSize: 28,
        letterSpacing: -0.5,
        color: '#2e2e39',
        fontWeight: '700',
        marginTop: 25,
        marginBottom: 20
    },
    topContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    photoContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageContainer:{
        width: 98,
        height: 98,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.12)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1
    },
    divider:{
        marginTop: 16,
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputContainer:{
        paddingTop: 15,
        paddingHorizontal: 32,
    }
})

export default styles