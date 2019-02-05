import React, {Component} from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity, Linking} from 'react-native'
import BackButton from "../../../components/BackButton/BackButton";
import styles from './Job.styles'
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default class Job extends Component{
    backButtonHandler = () => {
        this.props.navigator.pop()
    }
    //TODO: 구글 지도 링크
    handleClick = () => {
        Linking.canOpenURL('https://google.com').then(supported => {
            if (supported) {
                Linking.openURL('https://google.com');
            } else {
                console.log("Don't know how to open URI: " + "www.google.com");
            }
        });
    };
    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden: true
    };
    //TODO: 버튼 클릭
    render(){
        return(
            <ScrollView style={styles.container}>
                <BackButton handler={this.backButtonHandler}/>
                <Text style={styles.jobTitle}>Studio Construction</Text>

                <Text style={styles.caption}>Note</Text>
                <Text style={styles.content}>Please bring your helmet and gloves. {"\n"}
                    Pick up at Central Station.</Text>

                <Text style={styles.caption}>From</Text>
                <Text style={styles.content}>Tue, 17 December</Text>
                <Text style={styles.content}>10:00 PM</Text>

                <Text style={styles.caption}>Break Time</Text>
                <Text style={styles.content}>1 Hour</Text>

                <View style={styles.supervisorContainer}>
                    <View>
                        <Text style={styles.caption}>Supervisor</Text>
                        <Text style={styles.content}>Mike Piechota</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../../assets/_profile/test.jpeg')} style={styles.profileImage} resizeMode={'cover'}></Image>
                    </View>
                </View>

                <Text style={styles.caption}>Location</Text>
                <TouchableOpacity style={styles.locationContainer} onPress={this.handleClick}>
                    <Text style={styles.location}>60 Bay Street, Ultimo, NSW</Text>
                    <SvgUri width="12" height="17" source={require('../../../assets/icons/location.svg')}/>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="window-close" size={16} color="#d75e34" style={styles.declineIcon}/>
                        <Text style={styles.decline}>Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="check" size={18} color="#277fa2" style={styles.acceptIcon}/>
                        <Text style={styles.accept}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}