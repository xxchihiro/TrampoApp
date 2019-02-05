import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './ProfileInput.styles'

class ProfileInput extends Component{
    state = {
        text: ''
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TextInput
                    style={styles.text}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={"#dfdfe4"}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    secureTextEntry={this.props.password || false}
                    password={this.props.password || false}

                />
            </View>
        )
    }
}

export default ProfileInput