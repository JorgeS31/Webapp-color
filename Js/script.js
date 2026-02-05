const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");

const rojoNum = document.getElementById("rojoNum");
const verdeNum = document.getElementById("verdeNum");
const azulNum = document.getElementById("azulNum");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function actualizarColor() {
    const r = parseInt(rojo.value);
    const g = parseInt(verde.value);
    const b = parseInt(azul.value);

    rojoNum.value = r;
    verdeNum.value = g;
    azulNum.value = b;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = `RGB(${r}, ${g}, ${b})`;

    const hex = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexText.textContent = `HEX: ${hex.toUpperCase()}`;
    colorPicker.value = hex.toUpperCase();
}

rojo.addEventListener("input", actualizarColor);
verde.addEventListener("input", actualizarColor);
azul.addEventListener("input", actualizarColor);

rojoNum.addEventListener("input", () => {
    rojo.value = limitar(rojoNum.value);
    actualizarColor();
});
verdeNum.addEventListener("input", () => {
    verde.value = limitar(verdeNum.value);
    actualizarColor();
});
azulNum.addEventListener("input", () => {
    azul.value = limitar(azulNum.value);
    actualizarColor();
});

colorPicker.addEventListener("input", () => {
    const hex = colorPicker.value;
    rojo.value = parseInt(hex.substr(1, 2), 16);
    verde.value = parseInt(hex.substr(3, 2), 16);
    azul.value = parseInt(hex.substr(5, 2), 16);
    actualizarColor();
});

function limitar(v) {
    return Math.min(255, Math.max(0, v));
}

rojo.value = verde.value = azul.value = 0;
actualizarColor();
