// alert("Alerting message from Sample.js file")
console.log('Hello World!!');
const btn = document.querySelector('.btn')
btn.style.background = 'red';
console.log(btn);

const name = document.querySelector('#name');
name.value = "<Change My Name>";

const title = document.querySelector('h1');
title.innerText = "Testing Javascript";

btn.addEventListener('click', e=> {
    e.preventDefault();
    title.innerText = "Testing Javascript Event Listner";
    document.getElementById('name_entered').innerText = document.getElementById('name').value;
    document.getElementById('email_entered').innerText = document.getElementById('email').value;
})
