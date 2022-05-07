import { Verse } from "@/models";
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
