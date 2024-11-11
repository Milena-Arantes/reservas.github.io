const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(){
    window.location.href = "..//menu.html";
});

const btnCurso = document.getElementById('curso');
btnCurso.addEventListener('click', function(){
    window.location.href = './Curso/readCurso.html';
});

const btnSala = document.getElementById('sala');
btnSala.addEventListener('click', function(){
    window.location.href = './Salas/readSala.html';
});

const btnProfessor = document.getElementById('professor');
btnProfessor.addEventListener('click', function(){
    window.location.href = './Professor/readProfessor.html';
});