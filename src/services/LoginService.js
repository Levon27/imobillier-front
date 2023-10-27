export const LoginService = {
  login: function (email, password) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('http://localhost:5000/api/Login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.status >= 400) {
        if (response.status === 401)
          reject('Wrong password or e-mail')
        else
          reject('Something went wrong, try again')
      }
      else
        resolve(await response.json());
    })
  },
  register: function (name, age, email, password) {
    return fetch('http://localhost:5000/api/User', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name, age, email, password })
    });
  }
}