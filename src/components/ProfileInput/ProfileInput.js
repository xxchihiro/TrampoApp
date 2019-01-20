import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './ProfileInput.styles'

class ProfileInput extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TextInput
                    style={styles.placeholder}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={"#dfdfe4"}
                />
            </View>
        )
    }
}

export default ProfileInput