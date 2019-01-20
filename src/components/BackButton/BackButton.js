import React, { Component } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TouchableOpacity} from "react-native";

class BackButton extends Component {
    render(){
        return (
            <TouchableOpacity onPress={this.props.handler} style={{maxWidth: 25}}>
                <Icon name="keyboard-backspace" size={30} color="#000"/>
            </TouchableOpacity>
        )
    }
}

export default BackButton
