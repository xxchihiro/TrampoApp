import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startMainTabs from '../../MainTabs/startMainTabs';



class OnboardProfileScreen extends Component {
    doneHandler = () => {
        startMainTabs();
    }
    render () {
        return (
            <View>
                <Text>complete profile</Text>
                <Button title="done" onPress={this.doneHandler}/>
            </View>
        );
    }
}

export default OnboardProfileScreen;