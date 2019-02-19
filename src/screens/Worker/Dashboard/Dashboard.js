import React, { Component } from "react";
import {View, Text, ScrollView, TouchableOpacity, AsyncStorage} from 'react-native'
import styles from './Dashboard.styles'
import Card from '../../../components/Card/Card'
import Icon from "react-native-vector-icons/FontAwesome5";


class Dashboard extends Component {
    QRButtonHandler = () => {
        this.props.navigator.push({
            screen: "trampo.WorkerQRScreen"
        })
    }
    JobTouchHandler = () => {
        this.props.navigator.push({
            screen: "trampo.WorkerJobScreen"
        })
    }
    async componentDidMount(){
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.topContainer}>
                    <View>
                        <Text style={styles.week}>This week, you've worked</Text>
                        <Text style={styles.hour}>25 hours</Text>
                    </View>
                    <TouchableOpacity style={styles.QRButton} onPress={this.QRButtonHandler}>
                        <Icon name="qrcode" size={17} color="#fff" style={styles.icon}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardContainer}>
                    <Text style={styles.cardCaption}>Today’s Jobs</Text>
                    <Card pending={false} onItemSelected={this.JobTouchHandler}></Card>
                </View>

                <View style={styles.cardContainer}>
                    {/*TODO: FlatList*/}
                    <Text style={styles.cardCaption}>Pending Confirmation Jobs</Text>
                    <Card pending={true}></Card>
                    <Card pending={true}></Card>
                </View>
            </ScrollView>
        )
    }
}

export default Dashboard