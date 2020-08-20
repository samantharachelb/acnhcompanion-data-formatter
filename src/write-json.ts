import fs from 'fs';
const stringify = require('@aitodotai/json-stringify-pretty-compact');
function writeJSON(filename: string, data: any) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

export default writeJSON;
