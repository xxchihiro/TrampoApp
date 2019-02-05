import React, {Component} from 'react'
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './Profile.styles'
import PositionTab from "../../../components/PositionTab/PositionTab";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo"

class Profile extends Component{
    static navigatorStyle = {
        navBarHidden: true
    };
    EditHandler = () => {
        this.props.navigator.push({
            screen: "trampo.ProfileEditScreen"
        })
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.topBar}>
                    <TouchableOpacity>
                        <Text style={styles.logout}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.edit} onPress={this.EditHandler}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.nameContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../../assets/_profile/test.jpeg')} style={styles.profileImage} resizeMode={'cover'}></Image>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>Lucie Benevise</Text>
                        <Text style={styles.email}>lucicorn@gmail.com</Text>
                    </View>
                </View>

                <PositionTab/>

                <View style={styles.basicInfoContainer}>
                    <ProfileInfo caption={"Phone"} content={"0421 278 050"}/>
                    <ProfileInfo caption={"Address"} content={"6-14 Park Road, Auburn"}/>
                    <ProfileInfo caption={"Date of Birth"} content={"24/04/1997"}/>
                </View>


                <View style={styles.divider}></View>

                <View>
                    <ProfileInfo caption={"ABN"} content={"12312354312"}/>
                    <ProfileInfo caption={"TFN"} content={"12312354312"}/>
                    <ProfileInfo caption={"Bank Name"} content={"Commonwealth Bank"}/>
                    <ProfileInfo caption={"BSB"} content={"061-062"}/>
                    <ProfileInfo caption={"Account Number"} content={"4124-1241"}/>
                </View>



            </ScrollView>
        )
    }
}

export default Profile