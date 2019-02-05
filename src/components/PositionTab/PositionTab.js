import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from './PositionTab.styles'

class PositionTab extends Component{
    state = {
        supervisor: false
    }

    toggler = () => {
        this.setState({
            supervisor: !this.state.supervisor
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