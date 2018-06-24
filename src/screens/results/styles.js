import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#FFF"
  },
  unwantedItem: {
    backgroundColor: "transparent"
  },
  item: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 5,
    height: 180
  },
  gridImage: {
    height: 120,
    flex: 1,
    width: "100%",
    backgroundColor: "#CCC"
  },
  description: {
    color: "#000",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10
  },
  serachHeader: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#000",
    paddingTop: 22
  },
  searchbar: {
    height: 40,
    paddingLeft: 10,
    flex: 1,
    color: "#FFF",
    fontWeight: "800",
    fontSize: 17,
    backgroundColor: "#333"
  },
  initialView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 10
  }
});

export default styles;
