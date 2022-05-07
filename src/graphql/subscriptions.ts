/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVerse = /* GraphQL */ `
  subscription OnCreateVerse {
    onCreateVerse {
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
export const onUpdateVerse = /* GraphQL */ `
  subscription OnUpdateVerse {
    onUpdateVerse {
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
export const onDeleteVerse = /* GraphQL */ `
  subscription OnDeleteVerse {
    onDeleteVerse {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
