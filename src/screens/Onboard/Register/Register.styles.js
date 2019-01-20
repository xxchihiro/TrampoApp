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
        marginVertical: 40,
    },
    nameContainer:{
        flex: 1,
        flexDirection: 'row'
    },
    checkboxContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})

export default styles