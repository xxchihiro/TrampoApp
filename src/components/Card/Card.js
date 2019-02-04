import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import styles from './Card.styles'
import Icon from "react-native-vector-icons/MaterialIcons";
import SvgUri from 'react-native-svg-uri';



class Card extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.mask}>
                    <View style={this.props.pending? styles.greyline: styles.blueline}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>MRX Construction</Text>
                        <Text style={styles.time}>Today, 9:00 AM</Text>
                        <View style={styles.locationContainer}>
                            {/*<Icon name="map" size={15} color="#000"/>*/}
                            <SvgUri width="13" height="14" source={require('../../assets/icons/pin.svg')} style={styles.pinIcon}/>
                            <Text style={styles.location}>60 Bay Street, Ultimo - NSW</Text>
                        </View>
                    </View>
                    <View style={styles.rightArea}>
                        <SvgUri width="17" height="17" source={require('../../assets/icons/note.svg')} style={styles.noteIcon}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Card