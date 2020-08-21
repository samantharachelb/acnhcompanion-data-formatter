import fs from 'fs';
import writeJSON from "@src/utils/write-json";
import * as cleanup from '@src/utils/cleanup';

function formatFencing(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile);
    const prettyOutputData: any = [];
    const fullOutputData: any = [];
    for (const item of inputData) {
        let prettyJsonData = {
            'name': item['name'],
            'diy': item['name'],
            'stack_size': item['stack_size'],
            'variants': item['variants']
        }
        prettyOutputData.push(prettyJsonData);
        fullOutputData.push(prettyJsonData);
    }
    cleanup.delUndef(prettyOutputData);
    cleanup.delUndef(fullOutputData);
    writeJSON(`out/pretty/${filename}.json`, prettyOutputData);
    writeJSON(`out/full/${filename}.json`, fullOutputData);
}

export default formatFencing;
