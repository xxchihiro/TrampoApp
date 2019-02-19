import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import styles from './OnboardInput.styles'

class OnboardInput extends Component{
    state={
        value: ''
    }
    value = () => {
        return this.state.value
    }
    render() {
        return (
            <TextInput
                placeholder={this.props.placeholder}
                style={this.props.half? styles.halfinput: styles.input}
                secureTextEntry={this.props.password || false}
                autoCapitalize={'none'}
                onChangeText={(value) => {
                    this.setState({value})
                }}
                keyboardType={this.props.email? 'email-address': 'default' }
            />
        );
    }
}

export default OnboardInput