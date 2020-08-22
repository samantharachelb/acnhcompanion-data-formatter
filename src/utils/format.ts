import getSpawnInfo from "@src/utils/get-spawn-info";
import {delEmpty, delUndef, delUndefNull} from '@src/utils/cleanup';

export function achievementsData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for (const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'num': item['num'],
            'name': item['name'],
            'description': item['achievement_description'],
            'criteria': item['achievement_criteria'],
            'num_tiers': item['num_of_tiers'],
            'tiers': {
                'tier_1': {
                    'action_needed': item['tier_1'],
                    'reward': item['tier_1_reward'],
                    'noun': item['tier_1_noun'],
                    'modifier': item['tier_1_modifier']
                },
                'tier_2': {
                    'action_needed': item['tier_2'],
                    'reward': item['tier_2_reward'],
                    'noun': item['tier_2_noun'],
                    'modifier': item['tier_2_modifier']
                },
                'tier_3': {
                    'action_needed': item['tier_3'],
                    'reward': item['tier_3_reward'],
                    'noun': item['tier_3_noun'],
                    'modifier': item['tier_3_modifier']
                },
                'tier_4': {
                    'action_needed': item['tier_4'],
                    'reward': item['tier_4_reward'],
                    'noun': item['tier_4_noun'],
                    'modifier': item['tier_4_modifier']
                },
                'tier_5':{
                    'action_needed': item['tier_5'],
                    'reward': item['tier_5_reward'],
                    'noun': item['tier_5_noun'],
                    'modifier': item['tier_5_modifier']
                },
                'tier_6': {
                    'action_needed': item['tier_6'],
                    'reward': item['tier_6_reward'],
                    'noun': item['tier_6_noun'],
                    'modifier': item['tier_6_modifier']
                }
            }
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
            'num': item['num'],
            'name': item['name'],
            'description': item['achievement_description'],
            'criteria': item['achievement_criteria'],
            'sequential': item['sequential'],
            'internal_name': item['internal_name'],
            'internal_category': item['internal_category'],
            'num_tiers': item['num_of_tiers'],
            'tiers': [
                {
                    'action_needed': item['tier_1'],
                    'reward': item['tier_1_reward'],
                    'noun': item['tier_1_noun'],
                    'modifier': item['tier_1_modifier']
                },
                {
                    'action_needed': item['tier_2'],
                    'reward': item['tier_2_reward'],
                    'noun': item['tier_2_noun'],
                    'modifier': item['tier_2_modifier']
                },
                {
                    'action_needed': item['tier_3'],
                    'reward': item['tier_3_reward'],
                    'noun': item['tier_3_noun'],
                    'modifier': item['tier_3_modifier']
                },
                {
                    'action_needed': item['tier_4'],
                    'reward': item['tier_4_reward'],
                    'noun': item['tier_4_noun'],
                    'modifier': item['tier_4_modifier']
                },
                {
                    'action_needed': item['tier_5'],
                    'reward': item['tier_5_reward'],
                    'noun': item['tier_5_noun'],
                    'modifier': item['tier_5_modifier']
                },
                {
                    'action_needed': item['tier_6'],
                    'reward': item['tier_6_reward'],
                    'noun': item['tier_6_noun'],
                    'modifier': item['tier_6_modifier']
                }
            ]
        }
        fullOutputData.push(fullJsonOutputData);
    }
    delUndefNull(minOutputData);
    delEmpty(minOutputData);

}

export function artData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for (const item of inputData) {
        let minOutputJsonData = {
            'id': item['internal_id'],
            'name': item['name'],
            'size': item['size'],
            'real_artwork_title': item['real_artwork_title'],
            'artist': item['artist'],
            'description': item['description'],
            'catalog': item['catalog'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'variants': item['variants']
        }
        minOutputData.push(minOutputJsonData);
        let fullOutputJsonData = {
            'id': item['internal_id'],
            'name': item['name'],
            'size': item['size'],
            'real_artwork_title': item['real_artwork_title'],
            'artist': item['artist'],
            'description': item['description'],
            'catalog': item['catalog'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'variants': item['variants']
        }
        fullOutputData.push(fullOutputJsonData);
    }
}

export function clothingData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for (const item of inputData) {
        let minOutputJsonData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'style': item['style'],
            'size': item['size'],
            'miles_price': item['miles_price'],
            'catalog': item['catalog'],
            'seasonal_availability': item['seasonal_availability'],
            'images': {
                'closet': item['closet_image'],
                'storage': item['storage_image']
            },
            'variants': item['variants']
        }
        minOutputData.push(minOutputJsonData);
        let fullOutputJsonData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'style': item['style'],
            'size': item['size'],
            'miles_price': item['miles_price'],
            'catalog': item['catalog'],
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
        fullOutputData.push(fullOutputJsonData);
    }
}

export function critterData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for (const item of inputData) {
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


        let minOutputJsonData = {
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

        minOutputData.push(minOutputJsonData)

        let fullOutputJsonData = {
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
            'hha': {
                'category': item['hha_category'],
                'base_points': item['hha_base_points']
            },
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
        fullOutputData.push(fullOutputJsonData);
    }
}

export function furnitureData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for (const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'size': item['size'],
            'miles_price': item['miles_price'],
            'catalog': item['catalog'],
            'tag': item['tag'],
            'set': item['set'],
            'series': item['series'],
            "customization_kit_cost": item['customization_kit_cost'],
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
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
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
                'lighting_type': item['lighting_type'],
                'door_deco': item['door_deco']
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
        fullOutputData.push(fullJsonOutputData);
    }
}

export function homeDecoData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for (const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'miles_price': item['miles_price'],
            'catalog': item['catalog'],
            'series': item['series'],
            'tag': item['tag'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'variants': item['variants']
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'miles_price': item['miles_price'],
            'catalog': item['catalog'],
            'series': item['series'],
            'tag': item['tag'],
            'ceiling': {
              'type': item['ceiling_type']
            },
            'curtain': {
                'type': item['curtain_type'],
                'color': item['curtain_color']
            },
            'hha': {
                'base_points': item['hha_base_points']
            },
            'vfx':{
                'available': item['vfx'],
                'type': item['vfx_type']
            },
            'window': {
                'type': item['window_type'],
                'color': item['window_color'],
                'window_pane': item['pane_type']
            },
            'variants': item['variants']
        }
        fullOutputData.push(fullJsonOutputData);
    }
    delUndef(fullOutputData);
    delEmpty(fullOutputData);
}

export function villagerPhotosData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for (const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'size': item['size'],
            'catalog': item['catalog'],
            "customization_kit_cost": item['customization_kit_cost'],
            'hha': {
                'base_points': item['base_points']
            },
            'body': {
                'title': item['body_title'],
            },
            'pattern': {
                'title': item['pattern_title']
            },
            'variants': item['variants']
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'size': item['size'],
            'catalog': item['catalog'],
            'customize': item['customize'],
            "customization_kit_cost": item['customization_kit_cost'],
            'hha': {
                'base_points': item['base_points']
            },
            'body': {
                'title': item['body_title'],
            },
            'pattern': {
                'title': item['pattern_title']
            },
            'variant_id': item['variant_id'],
            'variants': item['variants']
        }
        fullOutputData.push(fullJsonOutputData);
    }
}

export function constructionData(inputData: any, minOutputData: object[], fullOutputData: object[]){
    for(const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'category': item['category'],
            'source': item['source'],
            'buy': item['buy'],
            'image': item['image']
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'category': item['category'],
            'source': item['source'],
            'buy': item['buy'],
            'filename': item['filename'],
            'image': item['image']
        }
        fullOutputData.push(fullJsonOutputData);
    }
}

export function fencingData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['name'],
            'stack_size': item['stack_size'],
            'variants': item['variants']
        }
        minOutputData.push(minJsonOutputData);
        fullOutputData.push(minJsonOutputData);
    }
}

export function fossilsData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
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
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
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
        fullOutputData.push(fullJsonOutputData);
    }
}

export function musicData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'source': item['source_notes'],
            'catalog': item['catalog'],
            'size': item['size'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'variants': item['variants'],
            'image': {
                'album_image': item['album_image'],
                'framed_image': item['framed_image']
            }
        }
        minOutputData.push(minJsonOutputData);
        fullOutputData.push(minJsonOutputData);
    }
}

export function otherData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'stack_size': item['stack_size'],
            'tag': item['tag'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'exchange': {
                'exchangable': item['exchange'],
                'exchange_currency': item['exchange_currency']
            },
            'variants': item['variants'],
            'image': {
                'inventory_image': item['inventory_image'],
                'storage_image': item['storage_image'],
            }
        }
        minOutputData.push(minJsonOutputData);
        fullOutputData.push(minJsonOutputData);
    }
}

export function reactionsData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let minJsonOutputData = {
            'name': item['name'],
            'source': {
                'villager_personality': item['source'],
                'notes': item['source_notes']
            },
            'image': {
                'icon': item['image']
            }
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'name': item['name'],
            'source': {
                'villager_personality': item['source'],
                'notes': item['source_notes']
            },
            'filename': item['icon_filename'],
            'image': {
                'icon': item['image']
            }
        }
        fullOutputData.push(fullJsonOutputData);
    }
}

export function recipesData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'category': item['category'],
            'card_color': item['card_color'],
            'recipes_to_unlock': item['recipes_to_unlock'],
            'source': item['source'],
            'source_notes': item['source_notes'],
            'buy': item['buy'],
            'sell': item['sell'],
            'exchange_price': item['exchange_price'],
            'exchange_currency': item['exchange_currency'],
            'icon_filename': item['icon_filename'],
            'materials': item['materials']
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
            'serial_id': item['serial_id'],
            'name': item['name'],
            'category': item['category'],
            'crafted_item_id': item['crafted_item_internal_id'],
            'card_color': item['card_color'],
            'recipes_to_unlock': item['recipes_to_unlock'],
            'source': item['source'],
            'source_notes': item['source_notes'],
            'buy': item['buy'],
            'sell': item['sell'],
            'exchange_price': item['exchange_price'],
            'exchange_currency': item['exchange_currency'],
            'icon_filename': item['icon_filename'],
            'materials': item['materials']
        }
        fullOutputData.push(fullJsonOutputData);
    }
}

export function specialNpcData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let minJsonOutputData = {
            'id': item['id'],
            'name': item['name'],
            'birthday': item['birthday'],
            'npc_id': item['npc_id'],
            'gender': {
                'global': item['gender'],
                'asia': item['gender_asia']
            },
            'images': {
                'icon': {
                    'uri': item['icon_image'],
                    'filename': item['icon_filename']
                },
                'photo': {
                    'uri': item['photo_image'],
                    'filename': item['photo_filename']
                }
            }
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['id'],
            'name': item['name'],
            'birthday': item['birthday'],
            'npc_id': item['npc_id'],
            'attributes': {
                'name_color': item['name_color'],
                'bubble_color': item['bubble_color']
            },
            'gender': {
                'global': item['gender'],
                'asia': item['gender_asia']
            },
            'images': {
                'icon': {
                    'uri': item['icon_image'],
                    'filename': item['icon_filename']
                },
                'photo': {
                    'uri': item['photo_image'],
                    'filename': item['photo_filename']
                }
            }
        }
        fullOutputData.push(fullJsonOutputData);
    }
}

export function toolsData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'size': item['size'],
            'source': item['source_notes'],
            'stack_size': item['stack_size'],
            'uses': item['uses'],
            'customization_kit_cost': item['customization_kit_cost'],
            'miles_price': item['miles_price'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'body': {
                title: item['body_title']
            },
            'variants': item['variants']
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'diy': item['diy'],
            'size': item['size'],
            'source': item['source_notes'],
            'stack_size': item['stack_size'],
            'uses': item['uses'],
            'customize': item['customize'],
            'customization_kit_cost': item['customization_kit_cost'],
            'miles_price': item['miles_price'],
            'hha': {
                'base_points': item['hha_base_points']
            },
            'body': {
                title: item['body_title']
            },
            'variant_id': item['variant_id'],
            'variants': item['variants']
        }
        fullOutputData.push(fullJsonOutputData);
    }
}

export function villagerData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for(const item of inputData) {
        let inputFurnitureList = item['furniture_list'];
        let furnitureList = inputFurnitureList.split(';');

        let inputFurnitureNameList = item['furniture_name_list'];
        let furnitureNameList = inputFurnitureNameList.split(';')

        let minJsonOutputData = {
            'name': item['name'],
            'birthday': item['birthday'],
            'species': item['species'],
            'gender': item['gender'],
            'hobby': item['hobby'],
            'catchphrase': item['catch_phrase'],
            'clothing': item['default_clothing'],
            'colors': item['colors'],
            'home':{
                'flooring': item['flooring'],
                'wallpaper': item['wallpaper'],
                'furniture_list': furnitureList
            },
            'favorites': {
                'song': item['favorite_song'],
                'saying': item['favorite_saying']
            },
            'personality': {
                'type': item['personality'],
                'subtype': item['subtype'],
            },
            'styles': item['styles'],
            'image': {
                'icon': item['icon_image'],
                'photo': item['photo_image'],
                'house': item['house_image']
            }
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'name': item['name'],
            'birthday': item['birthday'],
            'species': item['species'],
            'gender': item['gender'],
            'hobby': item['hobby'],
            'catchphrase': item['catch_phrase'],
            'clothing': item['default_clothing'],
            'attributes': {
                'name_color': item['name_color'],
                'bubble_color': item['bubble_color']
            },
            'home':{
                'flooring': item['flooring'],
                'wallpaper': item['wallpaper'],
                'furniture_list': furnitureList,
                'furniture_name_list': furnitureNameList
            },
            'favorites': {
                'song': item['favorite_song'],
                'saying': item['favorite_saying']
            },
            'personality': {
                'type': item['personality'],
                'subtype': item['subtype'],
            },
            'filename': item['filename'],
            'image': {
                'icon': item['icon_image'],
                'photo': item['photo_image'],
                'house': item['house_image']
            }
        }
        fullOutputData.push(fullJsonOutputData);
    }
}

export function itemsData(inputData: any, minOutputData: object[], fullOutputData: object[]) {
    for (const item of inputData) {
        let minJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'fossil_group': item['fossil_group'],
            'diy': item['diy'],
            'stack_size': item['stack_size'],
            'style': item['style'],
            'size': item['size'],
            'miles_price': item['miles_price'],
            'real_artwork_title': item['real_artwork_title'],
            'artist': item['artist'],
            'description': item['description'],
            'catalog': item['catalog'],
            'tag': item['tag'],
            'set': item['set'],
            'series': item['series'],
            "customization_kit_cost": item['customization_kit_cost'],
            'seasonal_availability': item['seasonal_availability'],
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
            'images': {
                'closet': item['closet_image'],
                'storage': item['storage_image'],
                'album_image': item['album_image'],
                'framed_image': item['framed_image']
            },
            'variants': item['variants']
        }
        minOutputData.push(minJsonOutputData);
        let fullJsonOutputData = {
            'id': item['internal_id'],
            'name': item['name'],
            'fossil_group': item['fossil_group'],
            'diy': item['diy'],
            'stack_size': item['stack_size'],
            'style': item['style'],
            'size': item['size'],
            'miles_price': item['miles_price'],
            'real_artwork_title': item['real_artwork_title'],
            'artist': item['artist'],
            'description': item['description'],
            'catalog': item['catalog'],
            'tag': item['tag'],
            'set': item['set'],
            'series': item['series'],
            "customization_kit_cost": item['customization_kit_cost'],
            'seasonal_availability': item['seasonal_availability'],
            'shape': [item['primary_shape'], item['secondary_shape']],
            'attributes': {
                'mannequin_piece': item['manniquin_piece'],
                'sort_order': item['sort_order'],
                'villager_equippable': item['villager_equippable'],
                'cloth_group_id': item['cloth_group_id'],
                'interact': item['interact'],
                'museum_room': item['museum'],
                'outdoor': item['outdoor'],
                'surface': item['surface'],
                'speaker_type': item['speaker_type'],
                'lighting_type': item['lighting_type'],
                'door_deco': item['door_deco']
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
            'ceiling': {
                'type': item['ceiling_type']
            },
            'vfx':{
                'available': item['vfx'],
                'type': item['vfx_type']
            },
            'window': {
                'type': item['window_type'],
                'color': item['window_color'],
                'window_pane': item['pane_type']
            },
            'curtain': {
                'type': item['curtain_type'],
                'color': item['curtain_color']
            },
            'images': {
                'closet': item['closet_image'],
                'storage': item['storage_image'],
                'album_image': item['album_image'],
                'framed_image': item['framed_image']
            },
            'variant_id': item['variant_id'],
            'variants': item['variants']
        }
        fullOutputData.push(fullJsonOutputData);
    }
    delUndef(minOutputData)
    delUndef(fullOutputData)
    delEmpty(minOutputData);
    delEmpty(fullOutputData);
}
