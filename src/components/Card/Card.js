import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import styles from './Card.styles'
import Icon from "react-native-vector-icons/MaterialIcons";


class Card extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.mask}>
                    <View style={this.props.pending? styles.greyline: styles.blueline}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>MRX Construction</Text>
                        <Text style={styles.time}>Today, 9:00 AM</Text>
                        <View>
                            <Icon name="map" size={15} color="#000"/>
                            <Text style={styles.location}>60 Bay Street, Ultimo - NSW</Text>
                        </View>
                    </View>
                    <View>
                        <Icon name="speaker-notes" size={15} color="#000" style={styles.icon}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Card