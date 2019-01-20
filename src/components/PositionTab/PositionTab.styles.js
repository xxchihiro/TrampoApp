import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        marginTop: 30
    },
    positionContainer:{
        flex:1,
        flexDirection:'row'
    },
    selected:{
        height: 36,
        paddingHorizontal: 13,
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
    unselected:{
        height: 36,
        paddingHorizontal: 10,
        borderRadius: 20.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedText:{
        fontSize: 15,
        letterSpacing: 0.4,
        color: '#ffffff',
        fontWeight: "500"
    },
    unselectedText:{
        fontSize: 15,
        letterSpacing: 0.4,
        color: '#787993',
        fontWeight: "500"
    },
    icon:{
        marginRight: 3
    }
})

export default styles