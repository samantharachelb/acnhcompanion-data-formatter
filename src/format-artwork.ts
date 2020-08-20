import fs from 'fs';
import writeJSON from "./write-json";
import * as cleanup from './cleanup';

function formatArtwork(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile);
    const prettyOutputData: any = [];
    const fullOutputData: any = [];

    for (const item of inputData) {
        let prettyJsonData = {};
        prettyOutputData.push(prettyJsonData);
        fullOutputData.push(prettyJsonData);
    }
    cleanup.delUndef(prettyOutputData);
    cleanup.delUndef(fullOutputData);
    writeJSON(`out/pretty/${filename}.json`, prettyOutputData);
    writeJSON(`out/full/${filename}.json`, fullOutputData);
}

export default formatArtwork;
