export function generateId() {
  return Math.ceil(Math.random() * 1000000).toString();
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-us', { dateStyle: 'medium' });
}

export function findDates(content) {
  const result = [
    ...content.matchAll(/[0-3]?[0-9]\/[0-3]?[0-9]\/(?:[0-9]{2})?[0-9]{2}/g),
  ];
  const dates = result.map((res) => res[0]);
  return dates.join(', ');
}
