/**
 * Generates a random color in hexadecimal format.
 * @returns {string} A random hexadecimal color code.
 */
function generateRandomColor() {
    // Generate random values for RGB channels
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // Convert RGB values to hexadecimal format
    var color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    return color;
}

/**
 * Generates SVG code for a tea cup with random colors for vapor, pot, plate, and tea bag.
 * @returns {string} SVG code for the tea cup.
 */
function randomTeaCup() {
    // Generate random colors for vapor, pot, tea bag and plate
    const vapourColor = generateRandomColor();
    const potColor = generateRandomColor();
    const teaBagColor = generateRandomColor();
    const plateColor = generateRandomColor();

    // SVG code for the tea cup with random colors
    var svgCode = `
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
           width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
           <g>
              <path fill="${vapourColor}" d="M38,9.498c0,1.887-1.025,2.646-1.055,2.668c-0.46,0.307-0.584,0.927-0.277,1.387
                 c0.192,0.289,0.51,0.445,0.833,0.445c0.19,0,0.383-0.055,0.554-0.168C38.134,13.777,40,12.5,40,9.498
                 c0-1.6-0.675-2.439-1.218-3.115C38.328,5.817,38,5.409,38,4.498c0-1.842,1.017-2.638,1.081-2.687
                 c0.444-0.317,0.553-0.933,0.24-1.384c-0.315-0.454-0.938-0.566-1.392-0.251C37.851,0.231,36,1.551,36,4.498
                 c0,1.614,0.679,2.459,1.224,3.138C37.691,8.218,38,8.603,38,9.498z"/>
              <path fill="${vapourColor}" d="M50,9.498c0,1.887-1.025,2.646-1.055,2.668c-0.46,0.307-0.584,0.927-0.277,1.387
                 c0.192,0.289,0.51,0.445,0.833,0.445c0.19,0,0.383-0.055,0.554-0.168C50.134,13.777,52,12.5,52,9.498
                 c0-1.6-0.675-2.439-1.218-3.115C50.328,5.817,50,5.409,50,4.498c0-1.842,1.017-2.638,1.081-2.687
                 c0.444-0.317,0.553-0.933,0.24-1.384c-0.315-0.454-0.938-0.566-1.392-0.251C49.851,0.231,48,1.551,48,4.498
                 c0,1.614,0.679,2.459,1.224,3.138C49.691,8.218,50,8.603,50,9.498z"/>
              <path fill="${vapourColor}" d="M26,9.498c0,1.887-1.025,2.646-1.055,2.668c-0.46,0.307-0.584,0.927-0.277,1.387
                 c0.192,0.289,0.51,0.445,0.833,0.445c0.19,0,0.383-0.055,0.554-0.168C26.134,13.777,28,12.5,28,9.498
                 c0-1.6-0.675-2.439-1.218-3.115C26.328,5.817,26,5.409,26,4.498c0-1.842,1.017-2.638,1.081-2.687
                 c0.444-0.317,0.553-0.933,0.24-1.384c-0.315-0.454-0.938-0.566-1.392-0.251C25.851,0.231,24,1.551,24,4.498
                 c0,1.614,0.679,2.459,1.224,3.138C25.691,8.218,26,8.603,26,9.498z"/>
              <path fill="${potColor}" d="M63,57.998H13c-0.553,0-1,0.447-1,1V60c0,2.208,1.791,4,4,4v-0.002h44V64c2.209,0,4-1.792,4-4v-1.002
                 C64,58.445,63.553,57.998,63,57.998z"/>
              <path fill="${teaBagColor}" d="M62,17.998H52v10.586l3.707,3.707C55.895,32.479,56,32.732,56,32.998v8c0,0.553-0.447,1-1,1h-8
                 c-0.553,0-1-0.447-1-1v-8c0-0.266,0.105-0.52,0.293-0.707L50,28.584V17.998H13h-1H4c-2.209,0-4,1.791-4,4v8L0.009,30H0
                 c0.001,6.625,5.373,11.998,12,11.998h2.938c4.336,8.316,13.033,14,23.062,14c14.359,0,26-11.642,26-26v-10
                 C64,18.894,63.104,17.998,62,17.998z M12,35.998c-3.313,0-5.999-2.686-6-5.998v-6.002h6v6c0,2.066,0.248,4.073,0.704,6H12z"/>
              <polygon fill="${plateColor}" points="48,39.998 54,39.998 54,33.412 51,30.412 48,33.412 	"/>
           </g>
        </svg>
    `;

    // Return the SVG code
    return svgCode;
}

// Export the function for use as an npm package
module.exports = { randomTeaCup };