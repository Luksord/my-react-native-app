import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, Alert } from "react-native";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean | null>(null);

  const validateEmail = () => {
    if (!email.includes("@") || email.length < 3) {
      alert(
        "Nieprawidłowy email. Email musi zawierać '@' oraz mieć minimum 3 znaki."
      );
      setError(true);
    } else {
      alert("Email jest poprawny!");
      setError(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Wprowadź Email</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Sprawdź" onPress={validateEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    color: "#333",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderRadius: 16,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
