// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Verse, Song } = initSchema(schema);

export {
  Verse,
  Song
};