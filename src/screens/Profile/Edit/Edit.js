import React, {Component} from 'react'
import {ScrollView, Text, View, TouchableOpacity, TextInput, Image} from 'react-native'

import styles from './Edit.styles'
import BackButton from "../../../components/BackButton/BackButton";
import ProfileInput from "../../../components/ProfileInput/ProfileInput";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Edit extends Component{
    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: true,
    };
    backButtonHandler = () => {
        this.props.navigator.pop()
    }

    resetPasswordHandler = () => {
        this.props.navigator.push({
            screen: "trampo.ProfileResetPasswordScreen"
        })
    }

    state = { name: '', email: '' };

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.topBar}>
                    <BackButton handler={this.backButtonHandler}/>
                    <Text style={styles.title}>Edit Profile</Text>
                    <TouchableOpacity>
                        <Text style={styles.save}>Save</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.nameContainer}>
                    <TouchableOpacity style={styles.imageContainer}>
                        <Image source={require('../../../assets/_profile/test.jpeg')} style={styles.profileImage}/>
                        <View style={styles.badge}>
                            <Icon name="camera" size={16} color="#787993" style={styles.cameraIcon}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <TextInput
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                            placeholder={"Lucie Benevise"}
                            placeholderTextColor={"#dfdfe4"}
                            style={styles.name}
                        />
                        <TextInput
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            placeholder={"lucicorn@gmail.com"}
                            placeholderTextColor={"#dfdfe4"}
                            style={styles.email}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <ProfileInput placeholder={"0421 278 050"} title={"Phone"}/>
                    <ProfileInput placeholder={"6-14, Park Road Auburn"} title={"Address"}/>
                    <ProfileInput placeholder={"24/04/1997"} title={"Date of Birth"}/>

                    <View style={styles.divider}></View>

                    <ProfileInput placeholder={"Commonwealth Bank"} title={"Bank Name"}/>
                    <ProfileInput placeholder={"061-062"} title={"BSB"}/>
                    <ProfileInput placeholder={"4124-1241"} title={"Account Number"}/>

                    <View style={styles.divider}></View>

                    <ProfileInput placeholder={"Enter ABN"} title={"ABN"}/>
                    <ProfileInput placeholder={"Enter TFN"} title={"TFN"}/>
                </View>

                <TouchableOpacity>
                    <Text style={styles.resetPassword} onPress={this.resetPasswordHandler}>Reset Password</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

export default Edit