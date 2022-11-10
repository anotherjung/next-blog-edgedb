import type {NextApiRequest, NextApiResponse} from 'next';
import {createClient} from 'edgedb';
import e, {$infer} from '../../dbschema/edgeql-js';

export const client = createClient();

const selectMovies = e.select(e.Movie, () => ({
  id: true,
  title: true,
}));

export type Movies = $infer<typeof selectMovies>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const movies = await selectMovies.run(client);
  res.status(200).json(movies);
}