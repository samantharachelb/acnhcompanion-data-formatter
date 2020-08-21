import formatCritterData from "@src/format/format-critters";
import formatFurnitureData from "@src/format/format-furniture";
import formatClothingData from "@src/format/format-clothing";
import formatArtwork from "@src/format/format-artwork";

// json file names for specific sets
const clothing = ['clothing', 'tops', 'bottoms', 'dress_up', 'headwear', 'accessories', 'socks', 'shoes', 'bags', 'clothing_other'];
const furniture = ['furniture', 'housewares', 'misc', 'wall_mounted'];
const critters = ['critters', 'fish', 'bugs', 'sea_creatures'];

for (let index = 0; index < critters.length; index++) {
    console.info(`Processing data for ${critters[index]}`)
    formatCritterData(critters[index]);
}

for (let index = 0; index < furniture.length; index++) {
    console.info(`Processing data for ${furniture[index]}`)
    formatFurnitureData(furniture[index]);
}

for (let index = 0; index < clothing.length; index++) {
    console.info(`Processing data for ${clothing[index]}`)
    formatClothingData(clothing[index]);
}

/**
 * @todo Achievements Data
 */


console.info('Processing data for art');
formatArtwork('art');

/**
 * @todo Construction Item Data
 */

/**
 * @todo Fencing Data
 */

/**
 * @todo Fossils Data
 */

/**
 * @todo Music Data
 */

/**
 * @todo Items Data
 */

/**
 * @todo Photos Data
 */

/**
 * @todo Posters Data
 */

/**
 * @todo Reactions Data
 */

/**
 * @todo Recipes Data
 */

/**
 * @todo Rugs Data
 */

/**
 * @todo Special NPC data
 */

/**
 * @todo Tools Data
 */

/**
 * @todo Umbrellas Data
 */

/**
 * @todo Villagers Data
 */

/**
 * @todo Wallpaper Data
 */
