/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVerse = /* GraphQL */ `
  query GetVerse($id: ID!) {
    getVerse(id: $id) {
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
export const listVerses = /* GraphQL */ `
  query ListVerses(
    $filter: ModelVerseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVerses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncVerses = /* GraphQL */ `
  query SyncVerses(
    $filter: ModelVerseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVerses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      title
      artist
      lastAuthor
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
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        artist
        lastAuthor
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSongs = /* GraphQL */ `
  query SyncSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSongs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        artist
        lastAuthor
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
