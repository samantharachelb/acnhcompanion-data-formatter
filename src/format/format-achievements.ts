import fs from 'fs';
import writeJSON from "@src/utils/write-json";
import * as cleanup from '@src/utils/cleanup';

function formatAchievements(filename: string) {
    const inputDataFile = fs.readFileSync(`src/data/${filename}.json`);
    // @ts-ignore
    const inputData = JSON.parse(inputDataFile);
    const prettyOutputData: any = [];
    const fullOutputData: any = [];

    for (const item of inputData) {
        let prettyJsonData = {
            'num': item['num'],
            'name': item['name'],
            'description': item['achievement_description'],
            'criteria': item['achievement_criteria'],
            'num_tiers': item['num_of_tiers'],
            'tiers': {
                'tier_1': {
                    'action_needed': item['tier_1'],
                    'reward': item['tier_1_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_2': {
                    'action_needed': item['tier_2'],
                    'reward': item['tier_2_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_3': {
                    'action_needed': item['tier_3'],
                    'reward': item['tier_3_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_4': {
                    'action_needed': item['tier_4'],
                    'reward': item['tier_4_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_5': {
                    'action_needed': item['tier_5'],
                    'reward': item['tier_5_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_6': {
                    'action_needed': item['tier_6'],
                    'reward': item['tier_6_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                }
            }
        }
        let fullJsonData = {
            'num': item['num'],
            'name': item['name'],
            'description': item['achievement_description'],
            'criteria': item['achievement_criteria'],
            'sequential': item['sequential'],
            'internal_name': item['internal_name'],
            'internal_category': item['internal_category'],
            'num_tiers': item['num_of_tiers'],
            'tiers': {
                'tier_1': {
                    'action_needed': item['tier_1'],
                    'reward': item['tier_1_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_2': {
                    'action_needed': item['tier_2'],
                    'reward': item['tier_2_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_3': {
                    'action_needed': item['tier_3'],
                    'reward': item['tier_3_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_4': {
                    'action_needed': item['tier_4'],
                    'reward': item['tier_4_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_5': {
                    'action_needed': item['tier_5'],
                    'reward': item['tier_5_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                },
                'tier_6': {
                    'action_needed': item['tier_6'],
                    'reward': item['tier_6_reward'],
                    'noun': item['_noun'],
                    'modifier': item['_modifier']
                }
            }
        }
        prettyOutputData.push(prettyJsonData);
        fullOutputData.push(fullJsonData);
    }
    cleanup.delUndefNull(prettyOutputData);
    cleanup.delUndefNull(fullOutputData);
    writeJSON(`out/pretty/${filename}.json`, prettyOutputData);
    writeJSON(`out/full/${filename}.json`, fullOutputData);
}

export default formatAchievements;
