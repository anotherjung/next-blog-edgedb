import React from 'react';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';

import {client} from '../api/movie';
import e from '../../dbschema/edgeql-js';
import Link from 'next/link';

export const getServerSideProps = async (
  context?: GetServerSidePropsContext
) => {
  const movie = await e
    .select(e.Movie, (movie) => ({
      id: true,
      title: true,
      filter: e.op(movie.id, '=', e.uuid(context!.params!.id as string)),
    }))
    .run(client);
  return {props: {movie: movie!}};
};

export type GetMovie = InferGetServerSidePropsType<typeof getServerSideProps>;

const Post: React.FC<GetMovie> = (props) => {
  console.log(1,props.movie[0])
  return (
    <div
      style={{
        margin: 'auto',
        padding: '10px',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      <h1 style={{padding: '50px 0px'}}>{props.movie[0].title}</h1>
      <p style={{color: '#66006'}}>{props.movie[0].id}</p>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default Post;