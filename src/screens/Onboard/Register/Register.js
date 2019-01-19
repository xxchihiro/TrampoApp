import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';



class RegisterScreen extends Component {

    nextButtonHandler = () => {
        this.props.navigator.push({
            screen: "trampo.OnboardProfileScreen"
        })
    }
    render () {
        return (
            <View>
                <Text>register</Text>
                <Button title="Next" onPress={this.nextButtonHandler}/>
            </View>
        );
    }
}

export default RegisterScreen;