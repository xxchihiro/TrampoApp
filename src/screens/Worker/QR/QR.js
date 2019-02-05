import React, { Component } from "react"
import {View, Text, Image} from 'react-native'
import BackButton from "../../../components/BackButton/BackButton";
import styles from "./QR.styles"
import QRImage from '../../../assets/qr.png'


class QR extends Component{
    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: true
    };
    backButtonHandler = () => {
        this.props.navigator.pop()
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <BackButton handler={this.backButtonHandler}/>
                    <Text style={styles.title}>QR Code</Text>
                    <View style={styles.placeholder}></View>
                </View>
                <View style={styles.qrContainer}>
                    <Image source={QRImage}/>
                </View>
                <View style={styles.divider}/>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Let your supervisor scan the QR code
                        to add you right away.
                    </Text>
                </View>
            </View>
        )
    }
}

export default QR