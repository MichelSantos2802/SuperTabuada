function gerarTabuada() {
    let num = document.getElementById('txt');
    let tab = document.getElementById('resultTabuada');
    if (num.value.length == 0) {
        window.alert('[ERRO]. Por favor digite um número.');
    } else {
        let n = Number(num.value);
        tab.innerHTML = '';
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            tab.appendChild(item);
        }
    }
}

function zerarTabuada() {
    document.getElementById('txt').value = '';
    document.getElementById('resultTabuada').innerHTML = '<option value="">𝔻𝕀𝔾𝕀𝕋𝔼 𝕌𝕄 ℕ𝕌𝕄𝔼ℝ𝕆</option>';
}