//botoes do menu lateral
const btnCadReserva = document.getElementById('btnCadReserva');
btnCadReserva.addEventListener('click', function(){
    window.location.href="../Reservas/createReserva.html"
});
const btnGrades = document.getElementById('btnGrades');
btnGrades.addEventListener('click', function(){
    window.location.href="../Reservas/readReserva.html"
});
const btnProfessores = document.getElementById('btnProfessores');
btnProfessores.addEventListener('click', function(){
    window.location.href="../Reservas/readReservaProfessor.html"
});
const btnSalas = document.getElementById('btnSalas');
btnSalas.addEventListener('click', function(){
    window.location.href="../Salas/readSalas.html"
});

//botao Secretaria
const btnSecretaria = document.getElementById('btnSecretaria');
btnSecretaria.addEventListener('click', function(){
    window.location.href="./secretaria.html"
});

//botao sair
const btnSair = document.getElementById('btnSair');
btnSair.addEventListener('click', function(){
    window.location.href="./autenticacao/login.html";
});