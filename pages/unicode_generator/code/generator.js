function get_random_hex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random_hex = Math.floor(Math.random() * (max - min + 1)) + min;
    return random_hex; // return as number, no need to return hex string here
}

function isRenderable(char) {
    return char !== '\uFFFD' && /\S/.test(char);
}

export function generate_string(length) {
    let result = "";
    for (let i = 0; i < length; ) {
        const code = get_random_hex(0x12000, 0x123ff);
        const char = String.fromCodePoint(code);
        if (isRenderable(char)) {
            result += char;
            i++;
        }
    }
    return result;
}