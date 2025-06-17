// @license Unlicense
// @source https://swxye.github.io/pages/unicode_generator/code/generator.js

function get_random_hex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isRenderable(char) {
    return char !== '\uFFFD' && /\S/.test(char);
}

export function generate_string(target_width, min, max) {
    function grapheme_length(string) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        return [...segmenter.segment(string)].length;
    }

    let result = "";
    let current_width = 0;

    while (current_width < target_width) {
        const code = get_random_hex(min, max);
        const char = String.fromCodePoint(code);

        if (isRenderable(char)) {
            const width = grapheme_length(char);
            if (width + current_width <= target_width) {
                result += char;
                current_width += width;
            }
        }
    }

    return result;
}
