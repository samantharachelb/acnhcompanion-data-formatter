/**
 * Recursive function to remove any null/undefined key values
 * @param obj - Object that has null/undefined key values
 */

function delUndef(obj: any) {
    Object.keys(obj).forEach(key => {
        if(obj[key] && typeof obj[key] === 'object') {
            delUndef(obj[key]);
        } else if (obj[key] === undefined) {
            delete obj[key];
        }
    });
}

function delNull(obj: any) {
    Object.keys(obj).forEach(key => {
        if(obj[key] && typeof obj[key] === 'object') {
            delNull(obj[key]);
        } else if (obj[key] === null) {
            delete obj[key];
        }
    });
}

function delUndefNull(obj: any) {
    Object.keys(obj).forEach(key => {
        if(obj[key] && typeof obj[key] === 'object') {
            delUndefNull(obj[key]);
        } else if (obj[key] === undefined || obj[key] === null) {
            delete obj[key];
        }
    });
}

function naMapToInt(obj: any) {
    Object.keys(obj).forEach(key => {
        if(obj[key] && typeof obj[key] === 'object') {
            naMapToInt(obj[key]);
        } else if (obj[key].match(/([Nn])\/?([Aa])/)) {
            obj[key] = "0";
        }
    });
}

function stripChar(obj: any, char: string) {
    Object.keys(obj).forEach(key => {
        const regex = new RegExp(char,'g');
        if(obj[key] && typeof obj[key] === 'object') {
            stripChar(obj[key], char);
        } else if (obj[key].match(regex)) {
            obj[key] = obj[key].replace(regex, '');
        }
    });
}
export { delUndef, delNull, delUndefNull, naMapToInt, stripChar };
