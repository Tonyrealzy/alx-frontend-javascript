export default function cleanSet(set, startString) {
    let result = "";

    if (!set instanceof Set) {
        throw new TypeError('set has to be a Set!');
    }
    for (const element of set) {
        if (element.startsWith(startString)) {
            const endString = element.slice(startString.length);
            result += (result.length > 0 ? '-' : '') + endString;
        }
    }
    
    return result;
}