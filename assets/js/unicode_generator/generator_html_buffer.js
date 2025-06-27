// @license Unlicense
// @source https://swxye.github.io/assets/js/unicode_generator/generator_html_buffer.js

import { generate_string } from './generator.js';

export function get_raw_minimum_input_value() {
    const owo = document.getElementById("page_content__generator__parameters__unicode_range__input__minimum");
    return owo ? owo.value : undefined;
}

export function get_raw_maximum_input_value() {
    const owo = document.getElementById("page_content__generator__parameters__unicode_range__input__maximum");
    return owo ? owo.value : undefined;
}

export function get_raw_length_input_value() {
    const owo = document.getElementById("page_content__generator__parameters__unicode_range__string_length_input");
    return owo ? owo.value : undefined;
}

function update_values() {
    const raw_minimum_input_value = get_raw_minimum_input_value();
    const raw_maximum_input_value = get_raw_maximum_input_value();
    const raw_length_input_value = get_raw_length_input_value();

    const minimum_input_value = parseInt(raw_minimum_input_value, 16);
    const maximum_input_value = parseInt(raw_maximum_input_value, 16);
    const length_input_value = parseInt(raw_length_input_value, 10);

    console.log("Parsed minimum_input_value:", minimum_input_value);
    console.log("Parsed maximum_input_value:", maximum_input_value);
    console.log("Parsed maximum_input_value:", length_input_value);
}

function generated_unicode() {
    const raw_minimum_input_value = get_raw_minimum_input_value();
    const raw_maximum_input_value = get_raw_maximum_input_value();
    const raw_length_input_value = get_raw_length_input_value();

    const minimum_input_value = parseInt(raw_minimum_input_value, 16);
    const maximum_input_value = parseInt(raw_maximum_input_value, 16);
    const length_input_value = parseInt(raw_length_input_value, 10);

    const result = generate_string(length_input_value, minimum_input_value, maximum_input_value);
    document.getElementById("page_content__generator__output").textContent = result;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("page_content__generator__parameters__unicode_range__input__minimum")
        .addEventListener("input", update_values);

    document.getElementById("page_content__generator__parameters__unicode_range__input__maximum")
        .addEventListener("input", update_values);

    document.getElementById("page_content__generator__parameters__button_generate")
        .addEventListener("click", generated_unicode);

    update_values();
});
