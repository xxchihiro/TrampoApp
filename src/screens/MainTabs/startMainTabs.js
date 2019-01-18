import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import newspaperIcon from '../../assets/newspaper.svg'
import calendarIcon from '../../assets/calendar.svg'

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-paper", 30),
        Icon.getImageSource("ios-share-alt", 30)

    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0]
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;