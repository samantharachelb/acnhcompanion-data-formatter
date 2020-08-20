import fs from 'fs';
import writeJSON from './write-json';
import * as cleanup from './cleanup';

function formatFurnitureData(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile);
    const prettyOutputData: any = [];
    const fullOutputData: any = [];

    for (const item of inputData) {

        let prettyJsonData = {
            'name': item['name'],
            'diy': item['diy'],
            'size': item['size'],
            'miles_price': item['miles_price'],
            'catalog': item['catalog'],
            'tag': item['tag'],
            'set': item['set'],
            'series': item['series'],
            "customization_kit_cost": item['customization_kit_cost'],
            'attributes': {
                'interact': item['interact'],
                'outdoor': item['outdoor'],
                'surface': item['surface'],
                'speaker_type': item['speaker_type'],
                'lighting_type': item['lighting_type']
            },
            'hha': {
                'base_points': item['hha_base_points'],
                'category': item['hha_category']
            },
            'body': {
                'title': item['body_title'],
                'customize': item['body_customize']
            },
            'pattern': {
                'title': item['pattern_title'],
                'customize': item['pattern_customize']
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

export default formatFurnitureData;
