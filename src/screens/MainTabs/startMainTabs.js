import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';



const startTabs = () => {
    Promise.all([
        Icon.getImageSource("th-large", 20),
        Icon.getImageSource("calendar-alt", 20),
        Icon.getImageSource("calendar-check", 20),
        Icon.getImageSource("user", 20)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Dashboard",
                    title: "Dashboard",
                    icon: sources[0],
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Timesheet",
                    title: "Timesheet",
                    icon: sources[1]
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Allocation",
                    title: "Allocation",
                    icon: sources[2]
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Profile",
                    title: "Profile",
                    icon: sources[3]
                }
            ]
        });
    });
};

export default startTabs;