function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    }
    //cor Q paleta vanilla
    document.querySelector('#v-191B50').onclick = function() {
    Clipboard_CopyTo('#191B50');}
    //cor M paleta vanilla
    document.querySelector('#v-353C7B').onclick = function() {
    Clipboard_CopyTo('#353C7B');
    }
    //cor E paleta vanilla
    document.querySelector('#v-5D6398').onclick = function() {
    Clipboard_CopyTo('#5D6398');
    }
    //cor R paleta vanilla
    document.querySelector('#v-8682B5').onclick = function() {
    Clipboard_CopyTo('#8682B5');
    }
    //cor T paleta vanilla
    document.querySelector('#v-181E22').onclick = function() {
    Clipboard_CopyTo('#181E22');
    }
    
    //cor A paleta vanilla
    document.querySelector('#v-FEFEFE').onclick = function() {
    Clipboard_CopyTo('#FEFEFE');
    }
    //cor S paleta vanilla
    document.querySelector('#v-FE7372').onclick = function() {
    Clipboard_CopyTo('#FE7372');
    }
    //cor D paleta vanilla
    document.querySelector('#v-F74C4C').onclick = function() {
    Clipboard_CopyTo('#F74C4C');
    }
    //cor F paleta vanilla
    document.querySelector('#v-A83635').onclick = function() {
    Clipboard_CopyTo('#A83635');
    }
    //cor G paleta vanilla
    document.querySelector('#v-4CF74D').onclick = function() {
    Clipboard_CopyTo('#4CF74D');
    }