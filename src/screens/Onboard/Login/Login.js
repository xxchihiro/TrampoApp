import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import SvgUri from "react-native-svg-uri";

import startMainTabsWorker from "../../MainTabs/startMainTabsWorker";
import startMainTabsSupervisor from "../../MainTabs/startMainTabsSupervisor";

import OnboardInput from "../../../components/OnboardInput/OnboardInput";
import OnboardButton from "../../../components/OnboardButton/OnboardButton";
import OnboardTextButton from "../../../components/OnboardTextButton/OnboardTextButton";
import styles from "./Login.styles";

import { connect } from "react-redux";
import { login } from "../../../store/api/authActions";

class AuthScreen extends Component {
  //GO TO MAIN PAGE
  loginHandler = () => {
    const { Email, Password } = this.refs;
    this.props.dispatch(
      login(
        Email.value(),
        Password.value(),
        async (token) => {
          console.log("success");
          await AsyncStorage.setItem('token', token);
          if (this.state.userType === "worker") {
            startMainTabsWorker();
          } else {
            startMainTabsSupervisor();
          }
        },
        e => {
          alert(e);
        }
      )
    );
  };
  //GO TO REGISTER PAGE
  registerButtonHandler = () => {
    this.props.navigator.push({
      screen: "trampo.RegisterScreen"
    });
  };
  state = {
    userType: "supervisor"
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={"padding"}
        enabled
      >
        <View style={styles.logoContainer}>
          <SvgUri
            width="125"
            height="28"
            source={require("../../../assets/logo/trampo-logo.svg")}
          />
          {/*<Image source={trampoLogo} style={styles.logo}/>*/}
        </View>
        <View style={styles.inputContainer}>
          <OnboardInput
            ref="Email"
            placeholder={"Email address"}
            email={true}
          />
          <OnboardInput
            ref="Password"
            placeholder={"Password"}
            password={true}
          />
        </View>
        <View style={styles.loginContainer}>
          <OnboardTextButton text={"Forgot password?"} />
          <OnboardButton text={"Login"} handler={this.loginHandler} />
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerButtonCap}>Without account?</Text>
          <OnboardTextButton
            handler={this.registerButtonHandler}
            text={"Create one"}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AuthScreen);
