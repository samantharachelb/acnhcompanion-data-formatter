import fs from 'fs';
import writeJSON from "@src/utils/write-json";
import * as cleanup from '@src/utils/cleanup';

function formatConstruction(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile);
    const prettyOutputData: any = [];
    const fullOutputData: any = [];

    for (const item of inputData) {
        let prettyJsonData = {
            'name': item['name'],
            'category': item['category'],
            'source': item['source'],
            'buy': item['buy'],
            'image': item['image']
        };

        let fullJsonData = {
            'name': item['name'],
            'category': item['category'],
            'source': item['source'],
            'buy': item['buy'],
            'filename': item['filename'],
            'image': item['image']
        }
        prettyOutputData.push(prettyJsonData);
        fullOutputData.push(fullJsonData);
    }
    cleanup.delUndef(prettyOutputData);
    cleanup.delUndef(fullOutputData);
    writeJSON(`out/pretty/${filename}.json`, prettyOutputData);
    writeJSON(`out/full/${filename}.json`, fullOutputData);
}

export default formatConstruction;
