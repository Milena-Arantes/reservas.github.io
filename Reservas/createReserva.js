const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', function(){
    window.location.href = "..//menu.html";
});

const radioSim = document.getElementById('radioSim');
const radioNao = document.getElementById('radioNao');
const simManutencao = document.getElementById('simManutencao');
const naoManutencao = document.getElementById('naoManutencao');

//QUANDO SIM
radioSim.addEventListener('click',function(){
    //simManutencao.classList.add("simManutencao");
    simManutencao.style.display = "block";
    naoManutencao.style.display="none";
});
//QUANDO NÃO
radioNao.addEventListener('click',function(){
    //naoManutencao.classList.add("naoManutencao");
    naoManutencao.style.display="block";
    simManutencao.style.display="none";
});

const radioSala = document.getElementById('radioSala');
const radioLab = document.getElementById('radioLab');
const sala = document.getElementById('sala');
const lab = document.getElementById('lab');

const radioSalaMan = document.getElementById('radioSalaMan');
const radioLabMan = document.getElementById('radioLabMan');
const salaMan = document.getElementById('salaMan');
const labMan = document.getElementById('labMan');

radioSala.addEventListener('click', function(){
    //sala.classList.add("sala");
    sala.style.display="block";
    lab.style.display="none";
});

radioLab.addEventListener('click', function(){
    //Lab.classList.add("lab");
    lab.style.display="block";
    sala.style.display="none";
});

radioSalaMan.addEventListener('click', function(){
    //sala.classList.add("sala");
    salaMan.style.display="block";
    labMan.style.display="none";
});

radioLabMan.addEventListener('click', function(){
    //Lab.classList.add("lab");
    labMan.style.display="block";
    salaMan.style.display="none";
});