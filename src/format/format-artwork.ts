import fs from 'fs';
import writeJSON from "@src/utils/write-json";
import * as cleanup from '@src/utils/cleanup';

function formatArtwork(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile);
    const prettyOutputData: any = [];
    const fullOutputData: any = [];

    for (const item of inputData) {
        let prettyJsonData = {
            'name': item['name'],
            'real_artwork_title': item['real_artwork_title'],
            'artist': item['artist'],
            'description': item['description'],
            'catalog': item['catalog'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'variants': item['variants']
        };
        prettyOutputData.push(prettyJsonData);
        fullOutputData.push(prettyJsonData);
    }
    cleanup.delUndef(prettyOutputData);
    cleanup.delUndef(fullOutputData);
    writeJSON(`out/pretty/${filename}.json`, prettyOutputData);
    writeJSON(`out/full/${filename}.json`, fullOutputData);
}

export default formatArtwork;
