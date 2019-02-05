import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class CustomNav extends Component{
    render(){
        return(
            <View>
                <Text>This week, you've worked</Text>
                <Text>25 hours</Text>
            </View>
        )
    }
}