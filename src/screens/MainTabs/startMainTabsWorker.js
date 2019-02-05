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
                    screen: "trampo.WorkerDashboardScreen",
                    label: "Dashboard",
                    title: "Dashboard",
                    icon: sources[0],
                    navigatorStyle:{
                        navBarHidden: true,
                    }
                },
                {
                    screen: "trampo.WorkerTimesheetScreen",
                    label: "Timesheet",
                    icon: sources[1]
                },
                {
                    screen: "trampo.WorkerAllocationScreen",
                    label: "Allocation",
                    title: "Allocation",
                    icon: sources[2]
                },
                {
                    screen: "trampo.ProfileScreen",
                    label: "Profile",
                    title: "Profile",
                    icon: sources[3]
                }
            ],
            tabsStyle: {
                tabBarButtonColor: "#bababa",
                tabBarSelectedButtonColor: "#277fa2",
                tabBarBackgroundColor: '#ffffff',
                navBarTextFontSize: 13,
                forceTitlesDisplay: true,
                tabBarHideShadow: true
            },
            appStyle:{
                tabBarButtonColor: "#bababa",
                tabBarSelectedButtonColor: "#277fa2",
                tabBarBackgroundColor: '#ffffff',
                navBarTextFontSize: 13,
                forceTitlesDisplay: true,

            },

        });
    });
};

export default startTabs;