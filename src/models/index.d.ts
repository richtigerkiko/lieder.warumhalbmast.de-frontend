import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VerseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SongMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Verse {
  readonly id: string;
  readonly songID: string;
  readonly position?: number | null;
  readonly text?: string | null;
  readonly editor?: string | null;
  readonly editorJSID?: string | null;
  readonly editorJSType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Verse, VerseMetaData>);
  static copyOf(source: Verse, mutator: (draft: MutableModel<Verse, VerseMetaData>) => MutableModel<Verse, VerseMetaData> | void): Verse;
}

export declare class Song {
  readonly id: string;
  readonly title: string;
  readonly editor?: string | null;
  readonly Verses?: (Verse | null)[] | null;
  readonly originalAuthor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Song, SongMetaData>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song, SongMetaData>) => MutableModel<Song, SongMetaData> | void): Song;
}