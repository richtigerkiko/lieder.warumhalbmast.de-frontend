/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSongAndVerse = /* GraphQL */ `
  subscription OnCreateSongAndVerse {
    onCreateSongAndVerse {
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
export const onUpdateSongAndVerse = /* GraphQL */ `
  subscription OnUpdateSongAndVerse {
    onUpdateSongAndVerse {
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
export const onDeleteSongAndVerse = /* GraphQL */ `
  subscription OnDeleteSongAndVerse {
    onDeleteSongAndVerse {
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
export const onCreateVerse = /* GraphQL */ `
  subscription OnCreateVerse {
    onCreateVerse {
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
export const onUpdateVerse = /* GraphQL */ `
  subscription OnUpdateVerse {
    onUpdateVerse {
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
export const onDeleteVerse = /* GraphQL */ `
  subscription OnDeleteVerse {
    onDeleteVerse {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
