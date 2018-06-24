import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  Keyboard
} from "react-native";
import base64 from "base-64";
import Spinner from "../../components/spinner";
import Button from "../../components/button";
import styles from "./styles";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      search: "",
      dataSource: [],
      page: 1,
      error: ""
    };
  }

  fetchResult(num) {
    if (num) {
      this.setState({ dataSource: [], page: num });
    }
    const page = num ? num : this.state.page;
    this.setState({ isLoading: true });
    return fetch(
      `https://api.shutterstock.com/v2/images/search?page=${page}&per_page=40&query=` +
        encodeURIComponent(this.state.search),
      {
        headers: {
          Authorization:
            "Basic " +
            base64.encode(
              "5ed0b-d8c53-0b82c-bd6ed-02ffe-bf636:3a55b-8cba0-17834-326ad-9bff6-f49ec"
            )
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: [...this.state.dataSource, ...responseJson.data]
        });
      })
      .catch(error => {
        this.setState({ error: error.message, isLoading: false });
      });
  }
  moreResults() {
    if (this.state.search)
      this.setState(
        {
          page: this.state.page + 1
        },
        () => {
          this.fetchResult();
        }
      );
  }
  renderItems = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.gridImage}
          source={{ uri: item.assets.preview.url }}
          defaultSource={require("../../../assets/Placeholder.png")}
        />
        <Text style={styles.description} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.serachHeader}>
          <TextInput
            placeholder="Enter Search value"
            placeholderTextColor="#ccc"
            returnKeyType="search"
            underlineColorAndroid="transparent"
            enablesReturnKeyAutomatically
            keyboardAppearance="dark"
            style={styles.searchbar}
            onSubmitEditing={() => this.fetchResult(1)}
            onChange={e => this.setState({ search: e.nativeEvent.text })}
          />
          <Button
            onPress={() => {
              Keyboard.dismiss(), this.fetchResult(1);
            }}
            search={this.state.search}
          />
        </View>
        {this.state.dataSource.length === 0 ? (
          <View style={styles.initialView}>
            {this.state.isLoading ? (
              <Spinner />
            ) : (
              <Text
                style={{
                  color: this.state.error ? "#F44336" : "#3700B3",
                  fontSize: 20,
                  textAlign: "center"
                }}
              >
                {this.state.error ? this.state.error : "Get started and Search"}
              </Text>
            )}
          </View>
        ) : (
          <FlatList
            data={this.state.dataSource}
            style={styles.content}
            renderItem={this.renderItems}
            ListFooterComponent={
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Spinner />
              </View>
            }
            numColumns={3}
            keyExtractor={item => item.id}
            onEndReached={() => this.moreResults()}
            onEndReachedThreshold={100}
            removeClippedSubviews={true}
          />
        )}
      </View>
    );
  }
}
