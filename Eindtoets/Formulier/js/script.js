/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function removeForm(){
    document.getElementById('moveForm').classList.add('removeStyle');
    document.getElementById('changeMind').classList.remove('hideButton');
}

document.getElementById('notNow').onclick = removeForm;

function returnForm(){
    document.getElementById('moveForm').classList.remove('removeStyle');
    document.getElementById('changeMind').classList.add('hideButton');
}

document.getElementById('changeMind').onclick = returnForm;
