import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache, useQuery, gql} from '@apollo/client';
import Seance from './Seance';


// Permet d'appeler l'api du serveur (ApolloClient)
const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://192.168.1.8:3301/api',
    }),
    cache: new InMemoryCache()
    });
  


// Requete (GraphQl) permet d'avoir toutes les séances 
const QuerySeance = gql`
query{
  getAllSeancesOrderByEtat{
      id
      date
      lieu
      naomark
      classeEcole
      etat
  }
}`;

// Function qui appelle le useQuery 
Donne = async () => 
{
  // Permet de call l'api avec la requête demandée 
  const {loading, error, data} = await useQuery(QuerySeance ,{client: client});
  console.log("Donne : " + data.getAllSeancesOrderByEtat);
  // Permet d'avoir le JSON plus facilement
  if(data != undefined)
  {

  const myObjStr = JSON.stringify(data);
  console.log(myObjStr.getAllSeancesOrderByEtat);
  if(data != undefined)
  {
    console.log(myObjStr.getAllSeancesOrderByEtat[0].id);
  Seance(myObjStr.getAllSeancesOrderByEtat[0].id);
}

  }
  //SetData(myObjStr);
}




export default function Query() {


const [donne, SetData] = useState("");
  
const d = Donne();
console.log("Hello : " +  d.toString());


console.log("Donne : " + donne);

// Appelle Seance qui prend en parametre le résultat de data pour être traitée dans Seance
return(
  <>
  </>
)
}