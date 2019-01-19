import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import styles from './OnboardInput.styles'

class OnboardInput extends Component{
    render() {
        return (
            <TextInput
                placeholder={this.props.placeholder}
                style={styles.input}
                secureTextEntry={this.props.password || false}
                autoCapitalize={'none'}
                keyboardType={this.props.email? 'email-address': 'default' }
            />
        );
    }
}

export default OnboardInput