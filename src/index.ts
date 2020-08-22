import fs from 'fs';
import * as format from "@src/utils/format";
import * as cleanup from "@src/utils/cleanup";
import writeJSON from "@src/utils/write-json";

const workset_files = [
    'accessories', 'achievements', 'art', 'bags', 'bottoms', 'insects', 'clothing', 'clothing_other', 'construction',
    'critters', 'dress_up', 'fencing', 'fish', 'floors', 'fossils', 'furniture', 'headwear', 'housewares', 'items', 'misc',
    'music', 'other', 'photos', 'posters', 'reactions', 'recipes', 'rugs', 'sea_creatures', 'shoes', 'socks',
    'special_npcs', 'tools', 'tops', 'umbrellas', 'villagers', 'wall_mounted', 'wallpaper'
];

const critters_files = ['critters','fish', 'insects', 'sea_creatures'];
const clothing_files = [
    'accessories', 'bags', 'bottoms', 'clothing', 'clothing_other', 'dress_up',
    'headwear', 'shoes', 'socks', 'tops', 'umbrellas'
];
const furniture_files = ['furniture', 'housewares', 'misc', 'wall_mounted'];
const home_deco_files = ['wallpaper', 'floors', 'rugs'];
const villager_photo_files = ['photos', 'posters'];

for (const filename of workset_files) {
    console.log(`Loading ${filename}`)
    const inputDatafile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputJsonData = JSON.parse(inputDatafile);

    let minOutputData: object[] = [];
    let fullOutputData: object[] = [];

    if (filename === 'achievements') {
        format.achievementsData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'art') {
        format.artData(inputJsonData, minOutputData, fullOutputData);
    } else if (critters_files.includes(filename)) {
        format.critterData(inputJsonData, minOutputData, fullOutputData);
    } else if (clothing_files.includes(filename)) {
        format.clothingData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'construction') {
        format.constructionData(inputJsonData, minOutputData, fullOutputData)
    } else if (filename === 'fencing') {
        format.fencingData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'fossils') {
        format.fossilsData(inputJsonData, minOutputData, fullOutputData);
    } else if (furniture_files.includes(filename)) {
        format.furnitureData(inputJsonData, minOutputData, fullOutputData);
    } else if (home_deco_files.includes(filename)) {
        format.homeDecoData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'music') {
        format.musicData(inputJsonData, minOutputData, fullOutputData);
    } else if (villager_photo_files.includes(filename)) {
        format.villagerPhotosData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'other') {
        format.otherData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'reactions') {
        format.reactionsData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'recipes') {
        format.recipesData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'special_npcs') {
        format.specialNpcData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'tools') {
        format.toolsData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'villagers') {
        format.villagerData(inputJsonData, minOutputData, fullOutputData);
    } else if (filename === 'items') {
        format.itemsData(inputJsonData, minOutputData, fullOutputData);
    }

    cleanup.delUndef(minOutputData);
    cleanup.delUndef(fullOutputData);
    writeJSON(`out/pretty/${filename}.json`, minOutputData);
    writeJSON(`out/full/${filename}_full.json`, fullOutputData);
}
