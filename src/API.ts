/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSongAndVerseInput = {
  id?: string | null,
  title: string,
  artist?: string | null,
  lastAuthor: string,
  Verses?: Array< VerseObjInput > | null,
  _version?: number | null,
};

export type VerseObjInput = {
  editorJSID: string,
  editorJSType: string,
  text?: string | null,
  position: string,
};

export type ModelSongAndVerseConditionInput = {
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  lastAuthor?: ModelStringInput | null,
  and?: Array< ModelSongAndVerseConditionInput | null > | null,
  or?: Array< ModelSongAndVerseConditionInput | null > | null,
  not?: ModelSongAndVerseConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SongAndVerse = {
  __typename: "SongAndVerse",
  id: string,
  title: string,
  artist?: string | null,
  lastAuthor: string,
  Verses?:  Array<VerseObj > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type VerseObj = {
  __typename: "VerseObj",
  editorJSID: string,
  editorJSType: string,
  text?: string | null,
  position: string,
};

export type UpdateSongAndVerseInput = {
  id: string,
  title?: string | null,
  artist?: string | null,
  lastAuthor?: string | null,
  Verses?: Array< VerseObjInput > | null,
  _version?: number | null,
};

export type DeleteSongAndVerseInput = {
  id: string,
  _version?: number | null,
};

export type CreateVerseInput = {
  id?: string | null,
  position?: number | null,
  text?: string | null,
  editorJSID?: string | null,
  editorJSType?: string | null,
  songID: string,
  _version?: number | null,
};

export type ModelVerseConditionInput = {
  position?: ModelIntInput | null,
  text?: ModelStringInput | null,
  editorJSID?: ModelStringInput | null,
  editorJSType?: ModelStringInput | null,
  songID?: ModelIDInput | null,
  and?: Array< ModelVerseConditionInput | null > | null,
  or?: Array< ModelVerseConditionInput | null > | null,
  not?: ModelVerseConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Verse = {
  __typename: "Verse",
  id: string,
  position?: number | null,
  text?: string | null,
  editorJSID?: string | null,
  editorJSType?: string | null,
  songID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateVerseInput = {
  id: string,
  position?: number | null,
  text?: string | null,
  editorJSID?: string | null,
  editorJSType?: string | null,
  songID?: string | null,
  _version?: number | null,
};

export type DeleteVerseInput = {
  id: string,
  _version?: number | null,
};

export type CreateSongInput = {
  id?: string | null,
  title: string,
  lastAuthor: string,
  artist?: string | null,
  _version?: number | null,
};

export type ModelSongConditionInput = {
  title?: ModelStringInput | null,
  lastAuthor?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  title: string,
  lastAuthor: string,
  artist?: string | null,
  Verses?: ModelVerseConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelVerseConnection = {
  __typename: "ModelVerseConnection",
  items:  Array<Verse | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateSongInput = {
  id: string,
  title?: string | null,
  lastAuthor?: string | null,
  artist?: string | null,
  _version?: number | null,
};

export type DeleteSongInput = {
  id: string,
  _version?: number | null,
};

export type ModelSongAndVerseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  lastAuthor?: ModelStringInput | null,
  and?: Array< ModelSongAndVerseFilterInput | null > | null,
  or?: Array< ModelSongAndVerseFilterInput | null > | null,
  not?: ModelSongAndVerseFilterInput | null,
};

export type ModelSongAndVerseConnection = {
  __typename: "ModelSongAndVerseConnection",
  items:  Array<SongAndVerse | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVerseFilterInput = {
  id?: ModelIDInput | null,
  position?: ModelIntInput | null,
  text?: ModelStringInput | null,
  editorJSID?: ModelStringInput | null,
  editorJSType?: ModelStringInput | null,
  songID?: ModelIDInput | null,
  and?: Array< ModelVerseFilterInput | null > | null,
  or?: Array< ModelVerseFilterInput | null > | null,
  not?: ModelVerseFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  lastAuthor?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateSongAndVerseMutationVariables = {
  input: CreateSongAndVerseInput,
  condition?: ModelSongAndVerseConditionInput | null,
};

export type CreateSongAndVerseMutation = {
  createSongAndVerse?:  {
    __typename: "SongAndVerse",
    id: string,
    title: string,
    artist?: string | null,
    lastAuthor: string,
    Verses?:  Array< {
      __typename: "VerseObj",
      editorJSID: string,
      editorJSType: string,
      text?: string | null,
      position: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSongAndVerseMutationVariables = {
  input: UpdateSongAndVerseInput,
  condition?: ModelSongAndVerseConditionInput | null,
};

export type UpdateSongAndVerseMutation = {
  updateSongAndVerse?:  {
    __typename: "SongAndVerse",
    id: string,
    title: string,
    artist?: string | null,
    lastAuthor: string,
    Verses?:  Array< {
      __typename: "VerseObj",
      editorJSID: string,
      editorJSType: string,
      text?: string | null,
      position: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSongAndVerseMutationVariables = {
  input: DeleteSongAndVerseInput,
  condition?: ModelSongAndVerseConditionInput | null,
};

export type DeleteSongAndVerseMutation = {
  deleteSongAndVerse?:  {
    __typename: "SongAndVerse",
    id: string,
    title: string,
    artist?: string | null,
    lastAuthor: string,
    Verses?:  Array< {
      __typename: "VerseObj",
      editorJSID: string,
      editorJSType: string,
      text?: string | null,
      position: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateVerseMutationVariables = {
  input: CreateVerseInput,
  condition?: ModelVerseConditionInput | null,
};

export type CreateVerseMutation = {
  createVerse?:  {
    __typename: "Verse",
    id: string,
    position?: number | null,
    text?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
    songID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateVerseMutationVariables = {
  input: UpdateVerseInput,
  condition?: ModelVerseConditionInput | null,
};

export type UpdateVerseMutation = {
  updateVerse?:  {
    __typename: "Verse",
    id: string,
    position?: number | null,
    text?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
    songID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteVerseMutationVariables = {
  input: DeleteVerseInput,
  condition?: ModelVerseConditionInput | null,
};

export type DeleteVerseMutation = {
  deleteVerse?:  {
    __typename: "Verse",
    id: string,
    position?: number | null,
    text?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
    songID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lastAuthor: string,
    artist?: string | null,
    Verses?:  {
      __typename: "ModelVerseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lastAuthor: string,
    artist?: string | null,
    Verses?:  {
      __typename: "ModelVerseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lastAuthor: string,
    artist?: string | null,
    Verses?:  {
      __typename: "ModelVerseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetSongAndVerseQueryVariables = {
  id: string,
};

export type GetSongAndVerseQuery = {
  getSongAndVerse?:  {
    __typename: "SongAndVerse",
    id: string,
    title: string,
    artist?: string | null,
    lastAuthor: string,
    Verses?:  Array< {
      __typename: "VerseObj",
      editorJSID: string,
      editorJSType: string,
      text?: string | null,
      position: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSongAndVersesQueryVariables = {
  filter?: ModelSongAndVerseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongAndVersesQuery = {
  listSongAndVerses?:  {
    __typename: "ModelSongAndVerseConnection",
    items:  Array< {
      __typename: "SongAndVerse",
      id: string,
      title: string,
      artist?: string | null,
      lastAuthor: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSongAndVersesQueryVariables = {
  filter?: ModelSongAndVerseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSongAndVersesQuery = {
  syncSongAndVerses?:  {
    __typename: "ModelSongAndVerseConnection",
    items:  Array< {
      __typename: "SongAndVerse",
      id: string,
      title: string,
      artist?: string | null,
      lastAuthor: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVerseQueryVariables = {
  id: string,
};

export type GetVerseQuery = {
  getVerse?:  {
    __typename: "Verse",
    id: string,
    position?: number | null,
    text?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
    songID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListVersesQueryVariables = {
  filter?: ModelVerseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVersesQuery = {
  listVerses?:  {
    __typename: "ModelVerseConnection",
    items:  Array< {
      __typename: "Verse",
      id: string,
      position?: number | null,
      text?: string | null,
      editorJSID?: string | null,
      editorJSType?: string | null,
      songID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVersesQueryVariables = {
  filter?: ModelVerseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVersesQuery = {
  syncVerses?:  {
    __typename: "ModelVerseConnection",
    items:  Array< {
      __typename: "Verse",
      id: string,
      position?: number | null,
      text?: string | null,
      editorJSID?: string | null,
      editorJSType?: string | null,
      songID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lastAuthor: string,
    artist?: string | null,
    Verses?:  {
      __typename: "ModelVerseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      lastAuthor: string,
      artist?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSongsQuery = {
  syncSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      lastAuthor: string,
      artist?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSongAndVerseSubscription = {
  onCreateSongAndVerse?:  {
    __typename: "SongAndVerse",
    id: string,
    title: string,
    artist?: string | null,
    lastAuthor: string,
    Verses?:  Array< {
      __typename: "VerseObj",
      editorJSID: string,
      editorJSType: string,
      text?: string | null,
      position: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSongAndVerseSubscription = {
  onUpdateSongAndVerse?:  {
    __typename: "SongAndVerse",
    id: string,
    title: string,
    artist?: string | null,
    lastAuthor: string,
    Verses?:  Array< {
      __typename: "VerseObj",
      editorJSID: string,
      editorJSType: string,
      text?: string | null,
      position: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSongAndVerseSubscription = {
  onDeleteSongAndVerse?:  {
    __typename: "SongAndVerse",
    id: string,
    title: string,
    artist?: string | null,
    lastAuthor: string,
    Verses?:  Array< {
      __typename: "VerseObj",
      editorJSID: string,
      editorJSType: string,
      text?: string | null,
      position: string,
    } > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateVerseSubscription = {
  onCreateVerse?:  {
    __typename: "Verse",
    id: string,
    position?: number | null,
    text?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
    songID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateVerseSubscription = {
  onUpdateVerse?:  {
    __typename: "Verse",
    id: string,
    position?: number | null,
    text?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
    songID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteVerseSubscription = {
  onDeleteVerse?:  {
    __typename: "Verse",
    id: string,
    position?: number | null,
    text?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
    songID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lastAuthor: string,
    artist?: string | null,
    Verses?:  {
      __typename: "ModelVerseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lastAuthor: string,
    artist?: string | null,
    Verses?:  {
      __typename: "ModelVerseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lastAuthor: string,
    artist?: string | null,
    Verses?:  {
      __typename: "ModelVerseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
