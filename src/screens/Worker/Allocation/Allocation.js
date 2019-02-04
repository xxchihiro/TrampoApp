import React, { Component } from "react";
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import styles from './Allocation.styles'
import AllocationListItem from '../../../components/AllocationListItem/AllocationListItem'


class Allocation extends Component{
    static navigatorStyle = {
        navBarHidden: true
    };
    render(){
        return(
            // TODO: FLATLIST
            <View style={styles.container}>
                <Text style={styles.title}>My Allocation</Text>
                <View style={styles.listContainer}>
                    <AllocationListItem confirmed={true}/>
                    <AllocationListItem confirmed={false}/>
                    <AllocationListItem confirmed={true}/>
                    <AllocationListItem confirmed={false}/>

                </View>


            </View>
        )
    }
}

export default Allocation