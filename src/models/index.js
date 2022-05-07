// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SongAndVerse, Verse, Song, VerseObj } = initSchema(schema);

export {
  SongAndVerse,
  Verse,
  Song,
  VerseObj
};