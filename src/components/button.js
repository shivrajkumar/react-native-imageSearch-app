import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type Props = {};
export default class Button extends Component<Props> {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.searchBtn,
          {
            backgroundColor: this.props.search
              ? "#3700B3"
              : "rgba(55,0,179,0.2)"
          }
        ]}
        disabled={!this.props.search}
        {...this.props}
      >
        <Text
          style={{
            color: this.props.search ? "#FFF" : "#aaa",
            fontWeight: "900",
            fontSize: 17
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  searchBtn: {
    padding: 10,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: "center"
  }
});
