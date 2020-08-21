import fs from 'fs';
import writeJSON from "@src/utils/write-json";
import * as cleanup from '@src/utils/cleanup';

function formatClothingData(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile);
    const prettyOutputData: any = [];
    const fullOutputData: any = [];

    for (const item of inputData) {
        let prettyJsonData = {
            'name': item['name'],
            'diy': item['diy'],
            'style': item['style'],
            'size': item['size'],
            'miles_price': item['miles_price'],
            'catalog': item['catalog'],
            'source': item['source_notes'],
            'seasonal_availability': item['seasonal_availability'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'images': {
                'closet': item['closet_image'],
                'storage': item['storage_image']
            },
            'variants': item['variants']
        };

        let fullJsonData = {
            'name': item['name'],
            'diy': item['diy'],
            'style': item['style'],
            'size': item['size'],
            'miles_price': item['miles_price'],
            'catalog': item['catalog'],
            'source': item['source_notes'],
            'seasonal_availability': item['seasonal_availability'],
            'shape': [item['primary_shape'], item['secondary_shape']],
            'attributes': {
                'mannequin_piece': item['manniquin_piece'],
                'sort_order': item['sort_order'],
                'villager_equippable': item['villager_equippable'],
                'cloth_group_id': item['cloth_group_id']
            },
            'hha': {
                'base_points': item['hha_base_points']
            },
            'images': {
                'closet': item['closet_image'],
                'storage': item['storage_image']
            },
            'variants': item['variants']
        }
        prettyOutputData.push(prettyJsonData);
        fullOutputData.push(fullJsonData);
    }
    cleanup.delUndef(prettyOutputData);
    cleanup.delUndef(fullOutputData);
    writeJSON(`out/pretty/${filename}.json`, prettyOutputData);
    writeJSON(`out/full/${filename}.json`, fullOutputData);
}

export default formatClothingData;
