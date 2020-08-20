import fs from 'fs';
import jsonQuery from 'json-query';
import writeJSON from "./write-json";
import * as cleanup from "./cleanup";

function getSpawnInfo(critterType: string, critterName: string, region: string) {
    // array holding months
    const MONTHS = ['jan', 'feb', 'mar', 'april', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    // make the input strings lowercase
    //critterName = critterName.toLowerCase();
    critterType = critterType.toLowerCase();

    // check 'critterType' for spaces and replace with an underscore
    if (critterType.match(/\s/)) {
        critterType = critterType.replace(/\s/, '_');
    }

    let inputDatafile = fs.readFileSync(`src/data/spawn-rate/${critterType}_${region}.json`);
    // @ts-ignore
    const inputJson = JSON.parse(inputDatafile);

    // grab spawn data
    let spawnRateSearchData: any = [];
    spawnRateSearchData.push(jsonQuery(`[name=${critterName}]`, { data: inputJson}).value);

    let outputSpawnRateData: any = [];

    for (const item of spawnRateSearchData) {
        for (let index = 0; index < MONTHS.length; index++) {
            let data = {
                [MONTHS[index]]: {
                    "morning": item[`${region}_${MONTHS[index]}_morning`],
                    "daytime": item[`${region}_${MONTHS[index]}_daytime`],
                    "evening": item[`${region}_${MONTHS[index]}_evening`],
                    "evening1": item[`${region}_${MONTHS[index]}_evening1`],
                    "evening2": item[`${region}_${MONTHS[index]}_evening2`],
                    "night": item[`${region}_${MONTHS[index]}_night`],
                    "midnight": item[`${region}_${MONTHS[index]}_midnight`]
                }
            }
            outputSpawnRateData.push(data);
        }

    }
    cleanup.delUndef(outputSpawnRateData);
    cleanup.naMapToInt(outputSpawnRateData);
    cleanup.stripChar(outputSpawnRateData, '%');

    return outputSpawnRateData;
}

export default getSpawnInfo;
