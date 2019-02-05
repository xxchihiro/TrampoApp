import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './ProfileInfo.styles'

class ProfileInfo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.caption}>{this.props.caption}</Text>
                <Text style={styles.content}>{this.props.content}</Text>
            </View>
        )
    }
}

export default ProfileInfo