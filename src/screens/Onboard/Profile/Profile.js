import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import startMainTabs from '../../MainTabs/startMainTabs';
import styles from './Profile.styles'
import BackButton from "../../../components/BackButton/BackButton";
import OnboardTextButton from "../../../components/OnboardTextButton/OnboardTextButton";
import PositionTab from "../../../components/PositionTab/PositionTab";
import ProfileInput from "../../../components/ProfileInput/ProfileInput"
import Divider from "../../../assets/divider.png"


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
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <BackButton handler={this.backButtonHandler}/>
                        <OnboardTextButton text={"Done"} handler={this.doneHandler}></OnboardTextButton>
                    </View>
                    <Text style={styles.title}>Complete Profile</Text>
                    <View style={styles.photoContainer}>
                        <View style={styles.imageContainer}></View>
                    </View>
                    <View>
                        <PositionTab/>
                    </View>
                </View>
                <View style={styles.divider}>
                    <Image source={Divider}/>
                </View>
                <View style={styles.inputContainer}>
                    <ProfileInput placeholder={"Enter phone number"} title={"Phone"}/>
                    <ProfileInput placeholder={"Enter address"} title={"Address"}/>
                    <ProfileInput placeholder={"12/12/2018"} title={"Date of Birth"}/>
                    <ProfileInput placeholder={"Add bank name"} title={"Bank Name"}/>
                    <ProfileInput placeholder={"Enter BSB"} title={"BSB"}/>
                    <ProfileInput placeholder={"Enter account number"} title={"Account Number"}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default OnboardProfileScreen;