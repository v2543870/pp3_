export function filterByCity(users, city) {
  if (!city) return users;
  return users.filter(u => u.address?.city === city);
}

export function sortByName(users) {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}

export function getCities(users) {
  return [...new Set(users.map(u => u.address?.city).filter(Boolean))].sort();
}
