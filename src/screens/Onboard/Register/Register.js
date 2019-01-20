import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



import OnboardButton from '../../../components/OnboardButton/OnboardButton'
import OnboardTextButton from '../../../components/OnboardTextButton/OnboardTextButton'
import BackButton from '../../../components/BackButton/BackButton'





import styles from './Register.styles'
import OnboardInput from "../../../components/OnboardInput/OnboardInput";



class RegisterScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };
    nextButtonHandler = () => {
        this.props.navigator.push({
            screen: "trampo.OnboardProfileScreen"
        })
    }
    backButtonHandler = () => {
        this.props.navigator.pop()
    }
    state = {
        checked: false
    };
    render () {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <BackButton handler={this.backButtonHandler}/>
                <Text style={styles.title}>Create Account</Text>
                <View style={styles.nameContainer}>
                    <OnboardInput placeholder={"First name"} half={true}/>
                    <OnboardInput placeholder={"Last name"} half={true}/>
                </View>
                <OnboardInput placeholder={"Email address"} email={true}/>
                <OnboardInput placeholder={"Password"} password={true}/>
                <OnboardInput placeholder={"Confirm password"} password={true}/>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        title='I agree to'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                        wrapperStyle={{backgroundColor: '#fff', padding: 0, margin: 0, marginTop: -2}}
                        containerStyle={{backgroundColor: '#fff', borderWidth: 0, padding: 0, marginLeft: 0, marginBottom: 40, width: 100}}
                        textStyle={{fontSize: 15,
                            fontWeight: "600",
                            fontStyle: "normal",
                            letterSpacing: 0.2,
                            color: "#9c9c9c",
                            marginRight: 0
                        }}
                        checkedColor={'#277fa2'}
                        uncheckedColor={"#9c9c9c"}
                    />
                    <OnboardTextButton text={"terms and conditions"}></OnboardTextButton>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-end'}}>
                    <OnboardButton text={"Next"} handler={this.nextButtonHandler}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default RegisterScreen;