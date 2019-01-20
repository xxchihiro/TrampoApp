import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    button:{
        height: 36,
        width: 92,
        backgroundColor: '#277fa2',
        shadowColor: 'rgba(42, 55, 71, 0.15)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 1,
        borderRadius: 20.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 15,
        letterSpacing: 0.2,
        color: '#ffffff',
        fontWeight: "600"
    },
    icon:{
        marginLeft: 6
    }
})

export default styles