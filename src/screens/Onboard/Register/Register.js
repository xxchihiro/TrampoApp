import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { CheckBox } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OnboardButton from "../../../components/OnboardButton/OnboardButton";
import OnboardTextButton from "../../../components/OnboardTextButton/OnboardTextButton";
import BackButton from "../../../components/BackButton/BackButton";
import styles from "./Register.styles";
import OnboardInput from "../../../components/OnboardInput/OnboardInput";

import { connect } from "react-redux";
import { register } from "../../../store/api/authActions";

class RegisterScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  nextButtonHandler = async () => {
    console.log(this.props);
    const {
      Email,
      GivenName,
      FamilyName,
      Password,
      ConfirmPassword
    } = this.refs;
    this.props.dispatch(
      register(
        Email.value(),
        GivenName.value(),
        FamilyName.value(),
        Password.value(),
        ConfirmPassword.value(),
        () => {
          console.log("success");
          this.props.navigator.push({
            screen: "trampo.OnboardProfileScreen"
          });
        },
        (err) => {
            console.log("fail")
            const error = JSON.stringify(err)
            alert(error)
        }
      )
    );
  };
  backButtonHandler = () => {
    this.props.navigator.pop();
  };
  state = {
    checked: false
  };
  onPressAgree = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <BackButton handler={this.backButtonHandler} />
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.nameContainer}>
          <OnboardInput
            ref="GivenName"
            placeholder={"First name"}
            half={true}
          />
          <OnboardInput
            ref="FamilyName"
            placeholder={"Last name"}
            half={true}
          />
        </View>
        <OnboardInput ref="Email" placeholder={"Email address"} email={true} />
        <OnboardInput ref="Password" placeholder={"Password"} password={true} />
        <OnboardInput
          ref="ConfirmPassword"
          placeholder={"Confirm password"}
          password={true}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="I agree to"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={this.onPressAgree}
            checked={this.state.checked}
            wrapperStyle={{
              backgroundColor: "#fff",
              padding: 0,
              margin: 0,
              marginTop: -2
            }}
            containerStyle={{
              backgroundColor: "#fff",
              borderWidth: 0,
              padding: 0,
              marginLeft: 0,
              marginBottom: 40,
              width: 100
            }}
            textStyle={{
              fontSize: 15,
              fontWeight: "600",
              fontStyle: "normal",
              letterSpacing: 0.2,
              color: "#9c9c9c",
              marginRight: 0
            }}
            checkedColor={"#277fa2"}
            uncheckedColor={"#9c9c9c"}
          />
          <OnboardTextButton text={"terms and conditions"} />
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <OnboardButton text={"Next"} handler={this.nextButtonHandler} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  logined: state.auth.logined,
});

export default connect(mapStateToProps)(RegisterScreen);
