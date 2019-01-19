import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import startMainTabs from '../../MainTabs/startMainTabs';

import OnboardInput from '../../../components/OnboardInput/OnboardInput'
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
                    <TouchableOpacity style={styles.passwordButton}>
                        <Text style={styles.passwordButtonText}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.loginHandler} style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={styles.registerButtonCap}>Without account?</Text>
                    <TouchableOpacity onPress={this.registerButtonHandler} style={styles.registerButton}>
                        <Text style={styles.registerButtonText}>Create one</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default AuthScreen;