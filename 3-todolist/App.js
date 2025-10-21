import * as React from "react";
import { StyleSheet, View } from "react-native";
import TodoList from "./src/screens/ToDoList.js";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
