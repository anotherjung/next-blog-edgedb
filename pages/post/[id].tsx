import React from 'react';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';

import {client} from '../api/post';
import e from '../../dbschema/edgeql-js';
import Link from 'next/link';

export const getServerSideProps = async (
  context?: GetServerSidePropsContext
) => {
  const post = await e
    .select(e.BlogPost, (post) => ({
      id: true,
      title: true,
      content: true,
      filter: e.op(post.id, '=', e.uuid(context!.params!.id as string)),
    }))
    .run(client);
  return {props: {post: post!}};
};

export type GetPost = InferGetServerSidePropsType<typeof getServerSideProps>;

const Post: React.FC<GetPost> = (props) => {
  //console.log(1,props.post[0])
  return (
    <div
      style={{
        margin: 'auto',
        padding: '10px',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      <h1 style={{padding: '50px 0px'}}>{props.post[0].title}</h1>
      <p style={{color: '#66006'}}>{props.post[0].content}</p>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default Post;