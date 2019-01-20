import React, {Component} from 'react'
import {View, Image, Text} from 'react-native'
import styles from './AllocationListItem.styles'
import confirmedIcon from '../../assets/confirmed.png'
import pendingIcon from '../../assets/pending.png'

class AllocationListItem extends Component{
    render(){
        return(
            <View style={styles.container}>
                {this.props.confirmed ?
                    <Image source={confirmedIcon}/>
                    :<Image source={pendingIcon}/>
                }

                <View>
                    <Text>MRX Construction</Text>
                    <Text>Mon 24/12/2018, 9:00 AM</Text>
                </View>
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
        )
    }
}

export default AllocationListItem