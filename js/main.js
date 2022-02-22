let submit = document.querySelector('button');
submit.onclick = function() {
  let name = document.getElementById('imie');
  let surname = document.getElementById('nazwisko');
  let phone = document.getElementById('numer');
 
  document.getElementById('name').innerHTML = name.value;
  document.getElementById('surname').innerHTML = surname.value;
  document.getElementById('phone').innerHTML = phone.value;
}