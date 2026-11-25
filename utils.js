export function filterByCities(users, cities) {
  if (!cities || cities.length === 0) return users;
  const set = new Set(cities);
  return users.filter(u => set.has(u.address?.city));
}

export function sortByName(users) {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}

export function getCities(users) {
  return [...new Set(users.map(u => u.address?.city).filter(Boolean))].sort();
}
