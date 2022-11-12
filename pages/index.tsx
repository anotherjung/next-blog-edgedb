// pages/index.tsx

import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect} from 'react';
import {Posts} from "./api/post";
import Link from 'next/link';

const HomePage: NextPage = () => {
  const [posts, setPosts] = useState<Posts | null>(null);
  useEffect(() => {
    fetch(`/api/post`)
      .then((result) => result.json())
      .then(setPosts);
  }, []);
  if (!posts) return <p>Loading...</p>;

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="An awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blog Posts</h1>
        <div style={{height: '50px'}}></div>
        {posts.map((post) => {
          return (
            <Link href={`/post/${post.id}`} key={post.id}>
              <div className={styles.card}>
                <p>{post.title}</p>
              </div>
            </Link>
          );
        })}
        <div className={styles.card}><Link href="/playlist">My Movie Playlist</Link></div>
      </main>
    </div>
    </>

  );
};

export default HomePage;