import fs from 'fs';
import getSpawnInfo from "@src/utils/get-spawn-info";
import writeJSON from '@src/utils/write-json';
import * as cleanup from '@src/utils/cleanup';

function formatCritterData(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`)
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile)
    let prettyOutputData: any = [];
    let fullOutputData: any = [];

    for (const item of inputData) {
        // hemisphere availability
        let availMonthNorthern: string[] = [];
        let availMonthSouthern: string[] = [];
        let availTime: number[] = [];
        let allDay: boolean = false;
        let allYear: boolean = false;


        for (const availability of item['active_months']['northern']) {
            availMonthNorthern.push(availability['month']);
        }

        for (const availability of item['active_months']['southern']) {
            availMonthSouthern.push(availability['month'])
        }

        // doesn't matter which hemisphere is used, year-long availability is the same across
        // hemispheres
        allYear = availMonthNorthern.length >= 12;

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
            'total_catch_to_unlock': item['total_catch_to_unlock'],
            'availability': {
                'all_day': allDay,
                'all_year': allYear,
                'times': availTime,
                'months-northern': availMonthNorthern,
                'months-southern': availMonthSouthern,
                'spawn_rate': {
                    "northern": getSpawnInfo(`${item['source_sheet']}`, item['name'], 'nh'),
                    "southern": getSpawnInfo(`${item['source_sheet']}`, item['name'], 'sh')
                }
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
                'months-southern': availMonthSouthern,
                'spawn_rate': {
                    "northern": getSpawnInfo(`${item['source_sheet']}`, item['name'], 'nh'),
                    "southern": getSpawnInfo(`${item['source_sheet']}`, item['name'], 'sh')
                }
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

    }

    cleanup.delUndef(prettyOutputData);
    cleanup.delUndef(fullOutputData);
    writeJSON(`out/pretty/${filename}.json`, prettyOutputData);
    writeJSON(`out/full/${filename}.json`, fullOutputData);

}

export default formatCritterData;
