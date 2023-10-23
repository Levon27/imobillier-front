export const LoginService = {
  login: function (email, password) {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('http://localhost:5000/api/Login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.status >= 400)
        reject(await response.json());
      else
        resolve(await response.json());
    })
  }
}