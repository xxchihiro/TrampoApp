import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from "./OnboardTextButton.styles";

class OnboardTextButton extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.button} onPress={this.props.handler}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default OnboardTextButton