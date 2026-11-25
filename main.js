import { fetchUsers } from './api.js';
import { filterByCities, sortByName, getCities } from './utils.js';



function getSelectedCities() {
  return [...select.selectedOptions].map(o => o.value);
}

function render() {
  const result = sortByName(filterByCities(allUsers, getSelectedCities()));
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
  const prev = new Set(getSelectedCities()); 
  select.length = 0;
  for (const city of getCities(allUsers)) {
    select.add(new Option(city, city, false, prev.has(city)));
  }
}
