import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  todoitem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    marginBottom: 8,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  todoitemtext: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    lineHeight: 22,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#95a5a6",
    opacity: 0.8,
    fontWeight: "400",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  deletebutton: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 70,
    alignItems: "center",
    shadowColor: "#e74c3c",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  completebutton: {
    backgroundColor: "#27ae60",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 80,
    alignItems: "center",
    shadowColor: "#27ae60",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View style={styles.todoitem}>
      <View style={styles.textContainer}>
        <Text style={[styles.todoitemtext, task.completed && styles.completed]}>
          {task.text}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.completebutton}
          onPress={() => toggleCompleted(task.id)}
        >
          <Text style={styles.buttonText}>
            {task.completed ? "Undo" : "Complete"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deletebutton}
          onPress={() => deleteTask(task.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
