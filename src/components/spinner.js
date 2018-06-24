import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

type Props = {};
export default class Spinner extends Component<Props> {
  render() {
    return <ActivityIndicator size="large" color="#3700B3" {...this.props} />;
  }
}
