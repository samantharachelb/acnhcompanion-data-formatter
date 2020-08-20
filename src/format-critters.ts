import fs from 'fs';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
import writeJSON from './write-json';
import cleanup from './cleanup';

function formatCritterData(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`)
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile)
    var prettyOutputData: any = [];
    var fullOutputData: any = [];
    var csvOutputData: any = [];

    var minMaxVals: number[] = [];

    for (const item of inputData) {
        // hemisphere availability
        var availMonthNorthern: string[] = [];
        var availMonthSouthern: string[] = [];
        var availTime: number[] = [];
        var allDay: boolean = false;
        var allYear: boolean = false;

        for (const availability of item['active_months']['northern']) {
            availMonthNorthern.push(availability['month']);
        }

        for (const availability of item['active_months']['southern']) {
            availMonthSouthern.push(availability['month'])
        }

        // doesn't matter which hemisphere is used, year-long availability is the same across
        // hemispheres
        if (availMonthNorthern.length < 12) {
            allYear = false
        } else {
            allYear = true;
        }
        // it doesn't really matter which hemisphere is used here, the times are the same
        for (const availability of item['active_months']['northern']) {
            if (availability['isAllDay']) {
                allDay = true;
                for (let i = 0; i < 24; i++) {
                    availTime.push(i);
                }
                // exit the loop so we don't iterate over every 'isAllDay' entry
                break;
            } else {
                allDay = false;
                let availTimeStart = parseInt(availability['activeHours'][0][0]);
                let availTimeEnd = parseInt(availability['activeHours'][0][1]);
                if (availTimeStart > availTimeEnd) {
                    for (let i = availTimeStart; i < 24; i++) {
                        availTime.push(i);
                    }
                    for (let i = 0; i < availTimeEnd + 1; i++) {
                        availTime.push(i);
                    }
                } else {
                    for (let i = availTimeStart; i < availTimeEnd + 1; i++) {
                        availTime.push(i);
                    }
                }
                break;
            }
        }

        // rarity processing
        // note: the values in the 'spawn_rate' are min/max values.
        // will be using 'max' values for calculating rarity
        let rarity: any;
        console.log('-------------');
        console.log(item['name']);
        // convert to string
        let minMaxRange = JSON.stringify(item['spawn_rates']);
        // strip all double-quote characters
        minMaxRange = minMaxRange.replace(/"*"/gm, '');
        //strip the min value and the dash character
        var max: any;
        if (minMaxRange.match(/(?!\d+)\D(?=\d+)/)) {
            max = minMaxRange.replace(/\d+\D(?=\d+)/, '');
        } else {
            console.log(minMaxRange)
            max = minMaxRange;
        }
        max = max * 1;
        minMaxVals.push(max)
        console.log(max);

        let prettyJsonData = {
            'id': item['num'],
            'name': item['name'],
            'description': item['description'],
            'catch_phrase': item['catch_phrase'],
            'sell': item['sell'],
            'special_sell': item['special_sell'],
            'shadow': item['shadow'],
            'vision': item['vision'],
            'catch_difficulty': item['catch_difficulty'],
            'movement_speed': item['movement_speed'],
            'spawn_rates': item['spawn_rates'],
            'total_catch_to_unlock': item['total_catch_to_unlock'],
            'availability': {
                'all_day': allDay,
                'all_year': allYear,
                'times': availTime,
                'months-northern': availMonthNorthern,
                'months-southern': availMonthSouthern
            },
            'image': {
                'furniture': {
                    'file_name': item['furniture_filename'],
                    'uri': item['furniture_image']
                },
                'critterpedia': {
                    'file_name': item['critterpedia_filename'],
                    'uri': item['critterpedia_image']
                },
                'icon': {
                    'file_name': item['icon_filename'],
                    'uri': item['icon_image']
                }
            }
        }
        prettyOutputData.push(prettyJsonData);

        let fullJsonData = {
            'id': item['num'],
            'name': item['name'],
            'description': item['description'],
            'catch_phrase': item['catch_phrase'],
            'sell': item['sell'],
            'special_sell': item['special_sell'],
            'shadow': item['shadow'],
            'vision': item['vision'],
            'catch_difficulty': item['catch_difficulty'],
            'movement_speed': item['movement_speed'],
            'spawn_rates': item['spawn_rates'],
            'total_catch_to_unlock': item['total_catch_to_unlock'],
            'surface': item['surface'],
            'lighting_type': item['lighting_type'],
            'hha_category': item['hha_category'],
            'hha_base_points': item['hha_base_points'],
            'size': item['size'],
            'colors': item['colors'],
            'availability': {
                'all_day': allDay,
                'all_year': allYear,
                'times': availTime,
                'months-northern': availMonthNorthern,
                'months-southern': availMonthSouthern
            },
            'image': {
                'furniture': {
                    'file_name': item['furniture_filename'],
                    'uri': item['furniture_image']
                },
                'critterpedia': {
                    'file_name': item['critterpedia_filename'],
                    'uri': item['critterpedia_image']
                },
                'icon': {
                    'file_name': item['icon_filename'],
                    'uri': item['icon_image']
                }
            }
        }
        fullOutputData.push(fullJsonData)


        let csvRecord = {name: item['name'], spawn_rate: item['spawn_rates'], max_spawn_rate: max}
        csvOutputData.push(csvRecord);

    }

    let largestVal = Math.max(...minMaxVals);
    console.log('largest value: ', largestVal)

    const rows = ["creature", "spawn_rate", "max_spawn_rate"]

    const csvWriter = createCsvWriter({
        path: `out/csv/${filename}.csv`,
        header: [
            {id: 'name', title: 'creature' },
            {id: 'spawn_rate', title: 'spawn rate'},
            {id: 'max_spawn_rate', title: 'max. spawn rate'}
        ],
        encoding: 'utf8'
    });
    csvWriter.writeRecords(csvOutputData)
        .then(() => {
            console.log('... done');
        });

    //cleanup(prettyOutputData);
    //writeJSON(`out/pretty/${filename}.json`, prettyOutputData);
    //writeJSON(`out/full/${filename}.json`, fullOutputData);

}

export default formatCritterData;
