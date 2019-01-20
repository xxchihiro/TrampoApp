import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from "./OnboardButton.styles";
import Icon from "react-native-vector-icons/FontAwesome5";

class OnboardButton extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.handler} style={styles.button}>
                <Text style={styles.text}>{this.props.text}</Text>
                <Icon name="arrow-right" size={15} color="#fff" style={styles.icon}/>
            </TouchableOpacity>
        )
    }
}

export default OnboardButton