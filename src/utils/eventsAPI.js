const BASE_URL = '/api/events/';

function index() {
  return fetch(BASE_URL, getAuthRequestOptions('GET')).then(res => {
    if(res.ok) return res.json();
  })
  .then(events => events);
}

function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({})
  }
}