import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class AgendaScreen extends Component {

    static navigatorStyle = {
        // navBarTextColor: "#8b8b8b",
        // navBarTitleFontSize: 14,
        // navBarSubtitleFontSize: 20,
        navBarNoBorder: true,
        navBarCustomView: 'trampo.CustomNav'
    };


    constructor(props) {
        super(props);
        this.state = {
            items:
                    {'2019-05-22': [{text: 'item 1 - any js object'}],
                        '2019-05-23': [{text: 'item 2 - any js object'}],
                        '2019-05-24': [],
                        '2019-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
                    }
        }
        props.navigator.setTitle({
            title: "This week, you've worked",
            subtitle: '25hours',

        });

    }

    render() {
        return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={'2019-05-16'}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                // markingType={'period'}
                markedDates={{
                   '2019-05-08': {marked: true},
                   '2019-05-09': {marked: true},
                   '2019-05-14': {marked: true},
                   '2019-05-21': {marked: true},
                   '2019-05-22': {marked: true},
                   '2019-05-24': {marked: true},
                   '2019-05-25': {marked: true},
                   '2019-05-26': {marked: true}
                }}
                // monthFormat={'yyyy MM'}
                theme={{
                    calendarBackground: '#ffffff',
                    agendaKnobColor: '#cbc9d5',
                    backgroundColor: '#fbfbfb',
                    selectedDayBackgroundColor: '#277fa2',
                    selectedDotColor: '#ffffff',
                    dotColor: '#277fa2',
                    agendaTodayColor: 'red'
                }}
                renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            />
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);

    }

    // TODO: style item component
    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        width: 280,
        height: 100,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        shadowColor: "#e9e7f1",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 15,
        shadowOpacity: 1,
        // padding: 10,
        marginLeft: 'auto',
        marginRight: 20,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
});