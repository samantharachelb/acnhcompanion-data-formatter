import fs from 'fs';
import writeJSON from "@src/utils/write-json";
import * as cleanup from '@src/utils/cleanup';

function formatFossils(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile);
    const prettyOutputData: any = [];
    const fullOutputData: any = [];

    for (const item of inputData) {
        let prettyJsonData = {
            'name': item['name'],
            'description': item['description'],
            'fossil_group': item['fossil_group'],
            'catalog': item['catalog'],
            'size': item['size'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'variants': item['variants']
        }

        let fullJsonData = {
            'name': item['name'],
            'description': item['description'],
            'fossil_group': item['fossil_group'],
            'catalog': item['catalog'],
            'size': item['size'],
            'attributes': {
                'interact': item['interact'],
                'museum_room': item['museum']
            },
            'hha': {
                'base_points': item['hha_base_points']
            },
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

export default formatFossils;
