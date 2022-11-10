// pages/movie.tsx

import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect} from 'react';
import {Movies} from "./api/movie";

const MoviePage: NextPage = () => {
  const [movies, setMovies] = useState<Movies | null>(null);
  useEffect(() => {
    fetch(`/api/movie`)
      .then((result) => result.json())
      .then(setMovies);
  }, []);
  if (!movies) return <p>Loading...</p>;
console.log(1,movies)
  return (
    <div className={styles.container}>
      <Head>
        <title>My Movie Playlist</title>
        <meta name="description" content="An awesome movie list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Movies</h1>
        <div style={{height: '50px'}}></div>
        {movies.map((title) => {
          return (
            <a href={`/movie/${title.id}`} key={title.id}>
              <div className={styles.card}>
                <p>{title.title}</p>
              </div>
            </a>
          );
        })}
      </main>
    </div>
  );
};

export default MoviePage;