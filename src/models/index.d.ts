import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SongMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Song {
  readonly id: string;
  readonly songname?: string | null;
  readonly songtext?: string | null;
  readonly editor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Song, SongMetaData>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song, SongMetaData>) => MutableModel<Song, SongMetaData> | void): Song;
}