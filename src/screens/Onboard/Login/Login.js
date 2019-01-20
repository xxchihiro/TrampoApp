import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import startMainTabs from '../../MainTabs/startMainTabs';

import OnboardInput from '../../../components/OnboardInput/OnboardInput'
import OnboardButton from '../../../components/OnboardButton/OnboardButton'
import OnboardTextButton from '../../../components/OnboardTextButton/OnboardTextButton'
import styles from './Login.styles'

import trampoLogo from '../../../assets/trampo-logo.png'

class AuthScreen extends Component {
    //GO TO MAIN PAGE
    loginHandler = () => {
        startMainTabs();
    }
    //GO TO REGISTER PAGE
    registerButtonHandler = () => {
        this.props.navigator.push({
            screen: "trampo.RegisterScreen"
        })
    }



    render () {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={"padding"} enabled>
                <View style={styles.logoContainer}>
                    <Image source={trampoLogo} style={styles.logo}/>
                </View>
                <View style={styles.inputContainer}>
                    <OnboardInput placeholder={"Email address"} email={true}/>
                    <OnboardInput placeholder={"Password"} password={true}/>
                </View>
                <View style={styles.loginContainer}>
                    <OnboardTextButton text={"Forgot password?"}/>
                    <OnboardButton text={"Login"} handler={this.loginHandler}/>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={styles.registerButtonCap}>Without account?</Text>
                    <OnboardTextButton handler={this.registerButtonHandler} text={"Create one"}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default AuthScreen;