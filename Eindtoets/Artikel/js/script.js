/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


function removeAside(){
    //QuerySelector
    document.getElementById('remAside').classList.add('mystyle'); //Classlist object toevoegen
    document.getElementById('backAside').classList.remove('backAsideView'); //Classlist object verwijderen
    document.getElementById('flexMain').classList.add('wideMain');
}

document.getElementById('exit').onclick = removeAside;

function backAside(){
    document.getElementById('remAside').classList.remove('mystyle');
    document.getElementById('backAside').classList.add('backAsideView');
    document.getElementById('flexMain').classList.remove('wideMain');
}

document.getElementById('backAside').onclick = backAside;
