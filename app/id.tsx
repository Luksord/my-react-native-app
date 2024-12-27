import { useState } from "react";
import { useRouter } from "expo-router";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default function Homework04() {
  const [id, setId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validateId = () => {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId) || !Number.isInteger(numericId)) {
      setError("ID musi być liczbą całkowitą.");
      alert("Błąd: ID musi być liczbą całkowitą.");
      return;
    }
    if (numericId < 1 || numericId > 1000) {
      setError("ID musi być w zakresie od 1 do 1000.");
      alert("Błąd: ID musi być w zakresie od 1 do 1000.");
      return;
    }
    setError(null); // ID jest poprawne
    router.push(`./details/${id}`); // Nawigacja do szczegółów
  };
  const clearId = () => {
    setId(""); // Czyści pole ID
    setError(null); // Czyści komunikat błędu
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Wprowadź ID</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={setId}
        value={id}
        keyboardType="numeric" // Wyświetla klawiaturę numeryczną
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Przejdź" onPress={validateId} />
      <View style={styles.clearButton}>
        <Button title="Wyczyść" onPress={clearId} />
      </View>
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
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
  clearButton: {
    marginTop: 10,
  },
});
