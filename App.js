import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
// import { navigatorStyle } from "./src/styles/navigatorStyles";


//ONBOARDING
import AuthScreen from "./src/screens/Onboard/Login/Login";
import RegisterScreen from "./src/screens/Onboard/Register/Register"
import OnboardProfileScreen from "./src/screens/Onboard/Profile/Profile"

import CustomNav from "./src/screens/Worker/_CustomNav/CustomNav"
import WorkerDashboardScreen from "./src/screens/Worker/Dashboard/Dashboard"
import WorkerQRScreen from "./src/screens/Worker/QR/QR"
import WorkerAllocationScreen from "./src/screens/Worker/Allocation/Allocation"
import WorkerTimesheetScreen from "./src/screens/Worker/Timesheet/Timesheet"
import WorkerJobScreen from './src/screens/Worker/Job/Job'

import ProfileScreen from './src/screens/Profile/Profile/Profile'

import SharePlaceScreen from "./src/screens/_/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/_/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/_/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens

Navigation.registerComponent(
    "trampo.CustomNav",
    () => CustomNav,
    store,
    Provider
);

Navigation.registerComponent(
    "trampo.WorkerJobScreen",
    () => WorkerJobScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "awesome-places.AuthScreen",
    () => AuthScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "trampo.RegisterScreen",
    () => RegisterScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "trampo.OnboardProfileScreen",
    () => OnboardProfileScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "trampo.WorkerDashboardScreen",
    () => WorkerDashboardScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "trampo.WorkerQRScreen",
    () => WorkerQRScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "trampo.WorkerAllocationScreen",
    () => WorkerAllocationScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "trampo.WorkerTimesheetScreen",
    () => WorkerTimesheetScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesome-places.SharePlaceScreen",
    () => SharePlaceScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesome-places.FindPlaceScreen",
    () => FindPlaceScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesome-places.PlaceDetailScreen",
    () => PlaceDetailScreen,
    store,
    Provider
)

// Profile
Navigation.registerComponent(
    "trampo.ProfileScreen",
    () => ProfileScreen,
    store,
    Provider
);

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login",
        navigatorStyle: {
            navBarHidden: true
        }
    }
});
