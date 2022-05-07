/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVerseInput = {
  id?: string | null,
  songID: string,
  position?: number | null,
  text?: string | null,
  editor?: string | null,
  editorJSID?: string | null,
  editorJSType?: string | null,
  _version?: number | null,
};

export type ModelVerseConditionInput = {
  songID?: ModelIDInput | null,
  position?: ModelIntInput | null,
  text?: ModelStringInput | null,
  editor?: ModelStringInput | null,
  editorJSID?: ModelStringInput | null,
  editorJSType?: ModelStringInput | null,
  and?: Array< ModelVerseConditionInput | null > | null,
  or?: Array< ModelVerseConditionInput | null > | null,
  not?: ModelVerseConditionInput | null,
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

export type Verse = {
  __typename: "Verse",
  id: string,
  songID: string,
  position?: number | null,
  text?: string | null,
  editor?: string | null,
  editorJSID?: string | null,
  editorJSType?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateVerseInput = {
  id: string,
  songID?: string | null,
  position?: number | null,
  text?: string | null,
  editor?: string | null,
  editorJSID?: string | null,
  editorJSType?: string | null,
  _version?: number | null,
};

export type DeleteVerseInput = {
  id: string,
  _version?: number | null,
};

export type CreateSongInput = {
  id?: string | null,
  songname?: string | null,
  editor?: string | null,
  _version?: number | null,
};

export type ModelSongConditionInput = {
  songname?: ModelStringInput | null,
  editor?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  songname?: string | null,
  editor?: string | null,
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
  songname?: string | null,
  editor?: string | null,
  _version?: number | null,
};

export type DeleteSongInput = {
  id: string,
  _version?: number | null,
};

export type ModelVerseFilterInput = {
  id?: ModelIDInput | null,
  songID?: ModelIDInput | null,
  position?: ModelIntInput | null,
  text?: ModelStringInput | null,
  editor?: ModelStringInput | null,
  editorJSID?: ModelStringInput | null,
  editorJSType?: ModelStringInput | null,
  and?: Array< ModelVerseFilterInput | null > | null,
  or?: Array< ModelVerseFilterInput | null > | null,
  not?: ModelVerseFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  songname?: ModelStringInput | null,
  editor?: ModelStringInput | null,
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

export type CreateVerseMutationVariables = {
  input: CreateVerseInput,
  condition?: ModelVerseConditionInput | null,
};

export type CreateVerseMutation = {
  createVerse?:  {
    __typename: "Verse",
    id: string,
    songID: string,
    position?: number | null,
    text?: string | null,
    editor?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
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
    songID: string,
    position?: number | null,
    text?: string | null,
    editor?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
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
    songID: string,
    position?: number | null,
    text?: string | null,
    editor?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
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
    songname?: string | null,
    editor?: string | null,
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
    songname?: string | null,
    editor?: string | null,
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
    songname?: string | null,
    editor?: string | null,
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

export type GetVerseQueryVariables = {
  id: string,
};

export type GetVerseQuery = {
  getVerse?:  {
    __typename: "Verse",
    id: string,
    songID: string,
    position?: number | null,
    text?: string | null,
    editor?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
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
      songID: string,
      position?: number | null,
      text?: string | null,
      editor?: string | null,
      editorJSID?: string | null,
      editorJSType?: string | null,
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
      songID: string,
      position?: number | null,
      text?: string | null,
      editor?: string | null,
      editorJSID?: string | null,
      editorJSType?: string | null,
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
    songname?: string | null,
    editor?: string | null,
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
      songname?: string | null,
      editor?: string | null,
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
      songname?: string | null,
      editor?: string | null,
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

export type OnCreateVerseSubscription = {
  onCreateVerse?:  {
    __typename: "Verse",
    id: string,
    songID: string,
    position?: number | null,
    text?: string | null,
    editor?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
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
    songID: string,
    position?: number | null,
    text?: string | null,
    editor?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
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
    songID: string,
    position?: number | null,
    text?: string | null,
    editor?: string | null,
    editorJSID?: string | null,
    editorJSType?: string | null,
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
    songname?: string | null,
    editor?: string | null,
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
    songname?: string | null,
    editor?: string | null,
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
    songname?: string | null,
    editor?: string | null,
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
