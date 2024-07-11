import Preloader from '../components/Preloader';
import Search from '../components/Search';
import Movies from './../components/Movies';
import React, { useState, useEffect } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;
const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchData = async (value, type='all') => {
    try {
      setLoading(true)
      const query1 = value ? value : 'matrix';
      const query2 = type !== 'all' ? `&type=${type}` : '';
      const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query1}${query2}`;
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData);
      setMovies(jsonData.Search);
      setLoading(false)
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className='content container'>
      <Search searchMovies={fetchData}/>
      {loading ? <Preloader />
       :
       <Movies movies={movies} />
      }
    </main>
  )
}

export default Main