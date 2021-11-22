import {
  ApolloClient,
  InMemoryCache,
  HttpLink, 
  ApolloProvider
} from "@apollo/client";
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import ComponentTest from "./ComponentTest";

/**
 * Le but est de créer une application permettant de superviser
 * App.js est le code correspondant à l'application côté joueur
 */

//
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.1.8:3301/api',
}),
  cache: new InMemoryCache()
  });

export default function App() {
  const [etatconnexion, SetConnexion] = useState('');
  const [text, SetText] = useState('');
  const [queue, SetQueue] = useState([]);
  var autoriserRequete = false;

  setInterval(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      SetConnexion(state.isConnected ? "Connecté par " + state.type : "Déconnecter");
      if(state.type == "wifi"){
        autoriserRequete = true;
        queue.forEach(element => {
          Seances();
          queue.pop(element);
        });
        console.log("\n")
        console.log(queue);
      } else {
        queue.push("requete")
        console.log(queue);
      }
    });
  }, 10000);

function Seances() {
  if(autoriserRequete)
    SetText(<ComponentTest/>);
}


  return (
    <ApolloProvider client={client}>
      <View> 
        <Text style={styles.TextSeance}>
    Etat de la connexion : {etatconnexion}
      </Text>
      
        <Button title="click me !" onPress={() => Seances()}/>
        <Text>
          {text}
        </Text>
       </View>
    </ApolloProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 200,
    padding: 20
  },
  TextSeance: {
    textAlign: 'center',
  }
});