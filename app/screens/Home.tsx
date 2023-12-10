// app/screens/home/Home.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { listCategories, listMovies } from './graphql/queries';

Amplify.configure(awsconfig);

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchMovies();
  }, []);

  async function fetchCategories() {
    try {
      const categoryData = await API.graphql(graphqlOperation(listCategories));
      setCategories(categoryData.data.listCategories.items);
    } catch (err) {
      console.log('error fetching categories', err);
    }
  }

  async function fetchMovies() {
    try {
      const movieData = await API.graphql(graphqlOperation(listMovies));
      setMovies(movieData.data.listMovies.items);
    } catch (err) {
      console.log('error fetching movies', err);
    }
  }

  return (
    <View>
      {categories.map((category) => (
        <Text key={category.id}>{category.title}</Text>
      ))}
      {movies.map((movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </View>
  );
}