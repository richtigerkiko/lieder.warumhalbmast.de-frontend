/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSongAndVerse = /* GraphQL */ `
  mutation CreateSongAndVerse(
    $input: CreateSongAndVerseInput!
    $condition: ModelSongAndVerseConditionInput
  ) {
    createSongAndVerse(input: $input, condition: $condition) {
      id
      title
      artist
      lastAuthor
      Verses {
        editorJSID
        editorJSType
        text
        position
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSongAndVerse = /* GraphQL */ `
  mutation UpdateSongAndVerse(
    $input: UpdateSongAndVerseInput!
    $condition: ModelSongAndVerseConditionInput
  ) {
    updateSongAndVerse(input: $input, condition: $condition) {
      id
      title
      artist
      lastAuthor
      Verses {
        editorJSID
        editorJSType
        text
        position
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSongAndVerse = /* GraphQL */ `
  mutation DeleteSongAndVerse(
    $input: DeleteSongAndVerseInput!
    $condition: ModelSongAndVerseConditionInput
  ) {
    deleteSongAndVerse(input: $input, condition: $condition) {
      id
      title
      artist
      lastAuthor
      Verses {
        editorJSID
        editorJSType
        text
        position
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createVerse = /* GraphQL */ `
  mutation CreateVerse(
    $input: CreateVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    createVerse(input: $input, condition: $condition) {
      id
      position
      text
      editorJSID
      editorJSType
      songID
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
      position
      text
      editorJSID
      editorJSType
      songID
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
      position
      text
      editorJSID
      editorJSType
      songID
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
      title
      lastAuthor
      artist
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
      title
      lastAuthor
      artist
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
      title
      lastAuthor
      artist
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
