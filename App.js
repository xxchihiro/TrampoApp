import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { navigatorStyle } from "./src/styles/navigatorStyles";


//ONBOARDING
import AuthScreen from "./src/screens/Onboard/Login/Login";
import RegisterScreen from "./src/screens/Onboard/Register/Register"
import OnboardProfileScreen from "./src/screens/Onboard/Profile/Profile"

import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
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

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login",
        navigatorStyle: {
            ...navigatorStyle
        }
    }
});
