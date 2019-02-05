import React, {Component} from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'

import styles from './ResetPassword.styles'
import BackButton from "../../../components/BackButton/BackButton";
import ProfileInput from "../../../components/ProfileInput/ProfileInput";

class ResetPassword extends Component{
    static navigatorStyle = {
        navBarHidden: true,
    };
    backButtonHandler = () => {
        this.props.navigator.pop()
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.topBar}>
                    <BackButton handler={this.backButtonHandler}/>
                    <Text style={styles.title}>Reset Password</Text>
                    <TouchableOpacity>
                        <Text style={styles.save}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <ProfileInput placeholder={"••••••••"} title={"Current Password"} password={true}/>
                    <ProfileInput placeholder={"••••••••"} title={"New Password"} password={true}/>
                    <ProfileInput placeholder={"••••••••"} title={"Repeat New Password"} password={true}/>
                </View>

            </ScrollView>
        )
    }
}

export default ResetPassword