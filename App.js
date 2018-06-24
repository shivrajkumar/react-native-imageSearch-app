import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Results from "./src/screens/results";

const App = StackNavigator(
  {
    Results: { screen: Results }
  },
  {
    initialRouteName: "Results",
    headerMode: "none"
  }
);

export default () => <App />;
