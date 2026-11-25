const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
  let response;
  try {
    response = await fetch(USERS_URL);
  } catch (err) {
    throw new Error('Мережева помилка: не вдалося з\'єднатися із сервером.');
  }

  if (!response.ok) {
    throw new Error(`Помилка сервера: ${response.status} ${response.statusText}`);
  }

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    throw new Error('Невалідний JSON у відповіді сервера.');
  }

  if (!Array.isArray(data)) {
    throw new Error('Неочікуваний формат даних: очікувався масив користувачів.');
  }
  return data;
}
