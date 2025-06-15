import { generate_string } from './generator.js';

function generated_unicode() {
    document.getElementById("page_content__generator__output").textContent = generate_string(1000);
}

document.getElementById("page_content__generator__parameters__button_generate").addEventListener("click", generated_unicode);