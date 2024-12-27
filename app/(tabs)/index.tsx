import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button, FlatList } from "react-native";
import axios from "axios";

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function HomeScreen() {
  const router = useRouter();
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {/* Lesson 1
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text style={styles.title}>HOME PAGE</Text>
      <Button title={'Start!'} onPress={() => alert('Kliknięcie!')}/> */}
      {/* Lesson 2
      <Text style={styles.title}>HOME PAGE</Text>
      <Button title={"Move to About"} onPress={() => router.push("/about")} /> */}
      {/* Lesson 3
      <Text style={styles.title}>HOME PAGE</Text>
      <Button
        title={"Idź do details nr 42"}
        onPress={() => router.push("./details/43")}
      /> */}
      {/* Lesson 4
      <Text style={styles.title}>HOME PAGE</Text>
      <Button title={"HW-04"} onPress={() => router.push("./id")} /> */}
      <Text style={styles.title}>Lista użytkowników</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Button
              title={item.name}
              onPress={() => router.push(`/details/${item.id}`)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    flex: 1,
    fontSize: 24,
    paddingTop: 80,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  button: {
    marginBottom: 5,
  },
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//       }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//   }
// },
