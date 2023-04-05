import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../components/Logo";
import { Ionicons } from "@expo/vector-icons";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  function handleSearch() {
    console.log("Digitou " + inputValue);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Digite o nome da receita"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4CBE6C" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },

  input: {
    width: "90%",
    maxWidth: "90%",
  },

  form: {
    flexDirection: "row",
    height: 54,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8,
    paddingEnd: 16,
    paddingStart: 16,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: "#ECECEC",
  },
});
