import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import SvgUri from 'react-native-svg-uri';


import startMainTabsWorker from '../../MainTabs/startMainTabsWorker';
import startMainTabsSupervisor from '../../MainTabs/startMainTabsSupervisor'

import OnboardInput from '../../../components/OnboardInput/OnboardInput'
import OnboardButton from '../../../components/OnboardButton/OnboardButton'
import OnboardTextButton from '../../../components/OnboardTextButton/OnboardTextButton'
import styles from './Login.styles'


class AuthScreen extends Component {
    //GO TO MAIN PAGE
    loginHandler = () => {
        if (this.state.userType === 'worker'){
            startMainTabsWorker();
        } else {
            startMainTabsSupervisor();
        }
    }
    //GO TO REGISTER PAGE
    registerButtonHandler = () => {
        this.props.navigator.push({
            screen: "trampo.RegisterScreen"
        })
    }

    state = {
        userType: 'supervisor'
    }



    render () {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={"padding"} enabled>
                <View style={styles.logoContainer}>
                    <SvgUri width="125" height="28" source={require('../../../assets/logo/trampo-logo.svg')}/>
                    {/*<Image source={trampoLogo} style={styles.logo}/>*/}
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