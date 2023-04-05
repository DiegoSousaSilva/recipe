import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Receita Fácil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CBE6C",
    alignSelf: "flex-start",
    padding: 8,
    paddingRight: 20,
    paddingLeft: 16,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 32,
    marginBottom: 8,
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
