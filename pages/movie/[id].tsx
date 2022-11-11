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
      actors: { name:true },
      filter: e.op(movie.id, '=', e.uuid(context!.params!.id as string)),
    }))
    .run(client);
  return {props: {movie: movie!}};
};

export type GetMovie = InferGetServerSidePropsType<typeof getServerSideProps>;

const Movie: React.FC<GetMovie> = (props) => {
  const movie = props.movie[0];
  const actors = movie.actors;
  return (
    <div
      style={{
        margin: 'auto',
        padding: '10px',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      <h1 >Title: {movie.title}</h1>
      <p>Cast:</p>
      {actors.map((actor)=>(<p key={actor.name}>{actor.name}</p>))}
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default Movie;