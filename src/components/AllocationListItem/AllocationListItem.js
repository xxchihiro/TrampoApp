import React, {Component} from 'react'
import {View, Image, Text} from 'react-native'
import styles from './AllocationListItem.styles'
import confirmedIcon from '../../assets/confirmed.png'
import pendingIcon from '../../assets/pending.png'

import SvgUri from 'react-native-svg-uri';


class AllocationListItem extends Component{
    render(){
        return(
            <View style={styles.container}>
                {this.props.confirmed ?
                    <SvgUri width="24" height="24" source={require('../../assets/icons/confirmed.svg')}/>
                    :<Image source={pendingIcon}/>
                }

                <View style={styles.textContainer}>
                    <Text style={styles.jobTitle}>MRX Construction</Text>
                    <Text style={styles.jobTime}>Mon 24/12/2018, 9:00 AM</Text>
                </View>
                <View style={styles.tagContainer}>
                    {this.props.confirmed ?
                        <View style={[styles.tag, styles.tagConfirmed]}>
                            <Text style={[styles.tagtext, styles.tagtextConfirmed]}>Confirmed</Text>
                        </View>
                        :
                        <View style={[styles.tag, styles.tagPending]}>
                            <Text style={[styles.tagtext, styles.tagtextPending]}>Pending</Text>
                        </View>
                    }
                </View>

            </View>
        )
    }
}

export default AllocationListItem