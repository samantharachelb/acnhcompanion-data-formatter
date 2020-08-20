function cleanup(obj: any) {
    for (var key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
}

export default cleanup;
