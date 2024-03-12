const keys = [
    [ // primera fila del teclado
        ["1","!"],
        ["2","@"],
        ["3","#"],
        ["4","$"],
        ["5","%"],
        ["6","&"],
        ["7","/"],
        ["8","("],
        ["9",")"],
        ["0","="],
        ["'","?"],
        ["¡","¿"],
    ], 
    [
        ["q","Q"],
        ["w","W"],
        ["e","E"],
        ["r","R"],
        ["t","T"],
        ["y","Y"],
        ["u","U"],
        ["i","I"],
        ["o","O"],
        ["p","P"],
        ["`","^"],
        ["+","*"],
    ],
    [
        ["MAYUS","MAYUS"], // Tecla especial para cambiar mayúsculas
        ["a","A"],
        ["s","S"],
        ["d","D"],
        ["f","F"],
        ["g","G"],
        ["h","H"],
        ["j","J"],
        ["k","K"],
        ["l","L"],
        ["ñ","Ñ"],
        ["¨","{"],
        ["ç","¿}"],
    ],
    [
        ["SHIFT","SHIFT"], // Tecla especial para activar/desactivar shift
        ["<",">"],
        ["z","Z"],
        ["x","X"],
        ["c","C"],
        ["v","V"],
        ["b","B"],
        ["m","M"],
        [",",";"],
        [".",":"],
        [".",";"],
        ["-","_"],
    ],
    [
        ["SPACE","SPACE"] // última fila del teclado
    ] 
];

let mayus = false; // Variable para controlar si las mayúsculas están activadas
let shift = false; // Variable para controlar si la tecla shift está presionada

// Función para renderizar el teclado en el DOM
function renderKeyboard() {
    const keyboardContainer = document.querySelector('#keyboard-container');
    let empty = `<div class="key-empty"></div>`;

    // Mapeo de las filas y teclas del teclado
    const layers = keys.map((layer) => {
        return layer.map(key => {
            // Renderización de teclas especiales
            if (key[0] === 'SHIFT') {
                return `<button class="key key-shift">${key[0]}</button>`;
            }
            if (key[0] === 'MAYUS') {
                return `<button class="key key-mayus">${key[0]}</button>`;
            }
            if (key[0] === 'SPACE') {
                return `<button class="key key-space"></button>`;
            }

            // Renderización de teclas normales
            return `
                <button class="key key-normal"
                ${
                    shift ? key[1] // Si shift está activado, mostrar el carácter alternativo (mayúscula)
                    : mayus && key[0].toLowerCase().charCodeAt(0) > 97 &&
                    key[0].toLowerCase().charCodeAt(0) < 122 
                    ? key[1] // Si mayúsculas están activadas y la tecla es una letra, mostrar la mayúscula
                    : key[0] // Mostrar el carácter normal
                }
                </button>
            `;
        });
    });
}
