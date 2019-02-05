import React, {Component} from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import BackButton from "../../../components/BackButton/BackButton";
import styles from './Job.styles'
import SvgUri from 'react-native-svg-uri';


export default class Job extends Component{
    backButtonHandler = () => {
        this.props.navigator.pop()
    }
    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden: true
    };
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
                        <Image></Image>
                    </View>
                </View>

                <Text style={styles.caption}>Location</Text>
                <TouchableOpacity style={styles.locationContainer}>
                    <Text style={styles.location}>60 Bay Street, Ultimo, NSW</Text>
                    <SvgUri width="12" height="17" source={require('../../../assets/icons/location.svg')}/>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}