/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVerse = /* GraphQL */ `
  mutation CreateVerse(
    $input: CreateVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    createVerse(input: $input, condition: $condition) {
      id
      songID
      position
      text
      editor
      editorJSID
      editorJSType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVerse = /* GraphQL */ `
  mutation UpdateVerse(
    $input: UpdateVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    updateVerse(input: $input, condition: $condition) {
      id
      songID
      position
      text
      editor
      editorJSID
      editorJSType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVerse = /* GraphQL */ `
  mutation DeleteVerse(
    $input: DeleteVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    deleteVerse(input: $input, condition: $condition) {
      id
      songID
      position
      text
      editor
      editorJSID
      editorJSType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      songname
      editor
      Verses {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      songname
      editor
      Verses {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      songname
      editor
      Verses {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
