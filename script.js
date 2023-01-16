
const bancoDados = [];

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

btn1.addEventListener('click', () => {
    bancoDados.push({ pai: 'Tarefa01', filhos: [] });
    localStorage.setItem('@teste', JSON.stringify(bancoDados));
});

btn2.addEventListener('click', () => {

    // bancoDados.push({ btn1: '02' });
    const teste = localStorage.getItem('@teste');

    if(teste) {
        const novoBanco = JSON.parse(teste);
        novoBanco.push({ btn2: '02' });

        localStorage.setItem('@teste', JSON.stringify(novoBanco));
    }

});

btn3.addEventListener('click', () => {
    console.log('Btn 03')
});

btn4.addEventListener('click', () => {
    console.log('Btn 04')
});

btn5.addEventListener('click', () => {
    console.log('Btn 05')
});

