import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import startMainTabs from '../../MainTabs/startMainTabs';
import styles from './Profile.styles'
import BackButton from "../../../components/BackButton/BackButton";
import OnboardTextButton from "../../../components/OnboardTextButton/OnboardTextButton";


class OnboardProfileScreen extends Component {
    doneHandler = () => {
        startMainTabs();
    }
    static navigatorStyle = {
        navBarHidden: true
    };
    backButtonHandler = () => {
        this.props.navigator.pop()
    }
    render () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.topContainer}>
                    <BackButton handler={this.backButtonHandler}/>
                    <OnboardTextButton text={"Done"} handler={this.doneHandler}></OnboardTextButton>
                </View>
                <Text style={styles.title}>Complete Profile</Text>
                <View style={styles.photoContainer}>
                    <View style={styles.imageContainer}></View>
                </View>

            </ScrollView>
        );
    }
}

export default OnboardProfileScreen;