import { fetchUsers } from './api.js';
import { filterByCity, sortByName, getCities } from './utils.js';

const list = document.getElementById('userList');
const select = document.getElementById('cityFilter');
const status = document.getElementById('status');
const errorBox = document.getElementById('error');
const reloadBtn = document.getElementById('reload');

let allUsers = [];

function render() {
  const result = sortByName(filterByCity(allUsers, select.value));
  list.innerHTML = '';
  for (const u of result) {
    const li = document.createElement('li');
    li.innerHTML = `<strong></strong> <small></small>`;
    li.querySelector('strong').textContent = u.name;
    li.querySelector('small').textContent = `${u.email} — ${u.address.city}`;
    list.append(li);
  }
  status.textContent = `Знайдено: ${result.length}`;
  console.log('Результат:', result);
}

function fillCities() {
  select.length = 1; 
  for (const city of getCities(allUsers)) {
    select.add(new Option(city, city));
  }
}

async function load() {
  errorBox.textContent = '';
  status.textContent = 'Завантаження...';
  try {
    allUsers = await fetchUsers();
    fillCities();
    render();
  } catch (err) {
    list.innerHTML = '';
    status.textContent = '';
    errorBox.textContent = err.message;
    console.error(err);
  }
}

select.addEventListener('change', render);
reloadBtn.addEventListener('click', load);
load();
