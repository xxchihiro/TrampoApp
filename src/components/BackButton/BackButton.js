import React, { Component } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TouchableOpacity, View} from "react-native";
import SvgUri from 'react-native-svg-uri';
import styles from "../Card/Card.styles";


class BackButton extends Component {
    render(){
        return (
            <TouchableOpacity onPress={this.props.handler} style={{maxWidth: 25}}>
                {/*<Icon name="keyboard-backspace" size={30} color="#000"/>*/}
                <SvgUri width="23" height="10" source={require('../../assets/icons/back.svg')}/>
            </TouchableOpacity>
        )
    }
}

export default BackButton
