const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type':'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return resizeBy.json();
    throw new Error('Email already taken!');
  })
  .then(({token}) => token);
}

export default {
  signup
}