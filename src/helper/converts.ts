import songNavVue from "@/components/navigation/songNav.vue";
import { Song, Verse } from "@/models";
import type { OutputBlockData } from "@editorjs/editorjs";

export function convertApiVerseToEditorJsBlocks(verses: Verse[]) {
    let returnArray: OutputBlockData[] = [];
    verses.forEach((v) => {
        returnArray.push({
            id: v.editorJSID!,
            type: v.editorJSType!,
            data: {
                text: v.text,
            },
        });
    });

    return returnArray;
}

export function convertEditorJsBlocksToApiVerse(jsBlock: OutputBlockData[], songId: string) {
    let returnArray: Verse[] = [];
    for (let [index, val] of jsBlock.entries()) {
        returnArray.push(
            new Verse({
                songID: songId,
                editor: "Alexander Kiko",
                editorJSID: val.id,
                editorJSType: val.type,
                text: val.data.text,
                position: index,
            })
        );
    }
    return returnArray;
}

export function convertSongsToAlphabetArray(song:Song[]){
    let alphabetArray:AlphabeticalSong[] = []
    const alphabet = ["#","A","Ä","B","C","D","E","F","G","H","I","J","K","L","M","N","O","Ö","P","Q","R","S","T","U","Ü","V","W","X","Y","Z"];
    alphabet.forEach(letter => {
        let songs = new Array<Song>()
        if(letter === "#"){
            songs = song.filter(x => !alphabet.some(char => x.title?.charAt(0).toUpperCase() === char.toUpperCase())).sort((a,b) => a.title!.localeCompare(b.title!))
        }
        else{
            songs = song.filter(x => x.title?.charAt(0).toUpperCase() === letter).sort((a,b) => a.title!.localeCompare(b.title!))
        }
        alphabetArray.push({
            letter: letter,
            songs: songs
        })
    });

    return alphabetArray
}

export type AlphabeticalSong = {
    letter: string,
    songs: Song[]
  };