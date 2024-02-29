const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let e = 0; e < matrizCodigo.length; e++)
        if(stringEncriptada.includes(matrizCodigo[e][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[e][0], matrizCodigo[e][1]);
        }
    
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let e = 0; e < matrizCodigo.length; e++)
        if(stringDesencriptada.includes(matrizCodigo[e][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[e][1], matrizCodigo[e][0]);
        }
    
    return stringDesencriptada;
}

function copiarTexto() {
    const textarea = document.getElementById("mensagemCodificada");
  
    
    textarea.select();
    textarea.setSelectionRange(0, 99999);
  
    try {
        document.execCommand("copy");
    } catch (err) {
        alert("Erro ao copiar texto para a área de transferência. Por favor, copie manualmente.");
    }
}