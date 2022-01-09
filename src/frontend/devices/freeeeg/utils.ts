export const boyerMoore = (patternBuffer: string | Uint8Array) => {
    // Implementation of Boyer-Moore substring search ported from page 772 of
    // Algorithms Fourth Edition (Sedgewick, Wayne)
    // http://algs4.cs.princeton.edu/53substring/BoyerMoore.java.html
    /*
    USAGE:
        // needle should be ASCII string, ArrayBuffer, or Uint8Array
        // haystack should be an ArrayBuffer or Uint8Array
        var search = boyerMoore(needle);
        var skip = search.byteLength;
        var indices = [];
        for (var i = search(haystack); i !== -1; i = search(haystack, i + skip)) {
            indices.push(i);
        }
    */
    var pattern = asUint8Array(patternBuffer);
    var M = pattern.length;
    if (M === 0) {
        throw new TypeError("patternBuffer must be at least 1 byte long");
    }
    // radix
    var R = 256;
    var rightmost_positions = new Int32Array(R);
    // position of the rightmost occurrence of the byte c in the pattern
    for (var c = 0; c < R; c++) {
        // -1 for bytes not in pattern
        rightmost_positions[c] = -1;
    }
    for (var j = 0; j < M; j++) {
        // rightmost position for bytes in pattern
        rightmost_positions[pattern[j]] = j;
    }
    var boyerMooreSearch = (txtBuffer:string|Uint8Array, start?:number, end?:number) => {
        // Return offset of first match, -1 if no match.
        var txt = asUint8Array(txtBuffer);
        if (start === undefined) start = 0;
        if (end === undefined) end = txt.length;
        var pat = pattern;
        var right = rightmost_positions;
        var lastIndex = end - pat.length;
        var lastPatIndex = pat.length - 1;
        var skip;
        for (var i = start; i <= lastIndex; i += skip) {
            skip = 0;
            for (var j = lastPatIndex; j >= 0; j--) {
            var c = txt[i + j];
            if (pat[j] !== c) {
                skip = Math.max(1, j - right[c]);
                break;
            }
            }
            if (skip === 0) {
            return i;
            }
        }
        return -1;
    };
    return {search: boyerMooreSearch, byteLength: pattern.byteLength};
}

//Boyer Moore fast byte search method copied from https://codereview.stackexchange.com/questions/20136/uint8array-indexof-method-that-allows-to-search-for-byte-sequences
const asUint8Array = (input: string | Uint8Array) => {
    if (input instanceof Uint8Array) {
        return input;
    } else if (typeof(input) === 'string') {
        // This naive transform only supports ASCII patterns. UTF-8 support
        // not necessary for the intended use case here.
        var arr = new Uint8Array(input.length);
        for (var i = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);
        if (c > 127) {
            throw new TypeError("Only ASCII patterns are supported");
        }
        arr[i] = c;
        }
        return arr;
    } else {
        // Assume that it's already something that can be coerced.
        return new Uint8Array(input);
    }
}


export const bytesToInt24 = (x0:number,x1:number,x2:number) => { //Turns a 3 byte sequence into a 24 bit int
    return x0 * 65536 + x1 * 256 + x2;
}

export const bytesToInt16 = (x0:number,x1:number) => {
    return x0 * 256 + x1;
}
