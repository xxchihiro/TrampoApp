import React, { Component } from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from './PositionTab.styles'


import startMainTabsWorker from '../../screens/MainTabs/startMainTabsWorker'
import startMainTabsSupervisor from '../../screens/MainTabs/startMainTabsSupervisor'

import RNRestart from 'react-native-restart';

class PositionTab extends Component{
    state = {
        supervisor: false
    }
    async componentDidMount(){
        const userType = await AsyncStorage.getItem('userType')
        if(userType === 'worker'){
            this.setState({
                supervisor: false
            })
        }else{
            this.setState({
                supervisor: true
            })
        }
    }
    toggler = () => {
        this.setState({
            supervisor: !this.state.supervisor
        }, async () => {
            await AsyncStorage.setItem('userType', this.state.supervisor? 'supervisor': 'worker')
            RNRestart.Restart()
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.positionContainer}
                    disabled={this.state.supervisor}
                    onPress={this.toggler}
                    style={this.state.supervisor? styles.selected: styles.unselected}>

                    {this.state.supervisor?
                        <Icon
                            name="check"
                            size={15}
                            color={this.state.supervisor? "#fff":'#787993'}
                            style={styles.icon}
                        />
                        : null
                    }

                    <Text style={this.state.supervisor? styles.selectedText: styles.unselectedText}>supervisor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.positionContainer}
                    disabled={!this.state.supervisor}
                    onPress={this.toggler}
                    style={!this.state.supervisor? styles.selected: styles.unselected}>
                    {this.state.supervisor?
                        null:
                        <Icon
                            name="check"
                            size={15}
                            color={!this.state.supervisor? "#fff":'#787993'}
                            style={styles.icon}
                        />
                    }
                    <Text style={!this.state.supervisor? styles.selectedText: styles.unselectedText}>worker</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default PositionTab