import fs from 'fs';
const stringify = require('@aitodotai/json-stringify-pretty-compact');
function writeJSON(filename: string, data: any) {
    fs.writeFileSync(filename, stringify(data, {maxLength: 105, indent: 2}));
}

export default writeJSON;
