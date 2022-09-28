const checkToken = () => new Promise((resolve) => {
    const token = localStorage.getItem('olimpo-token');
    if (!token) {
      resolve(false);
      return;
    }
    (async () => {
      try {
        const res = await 
        // após o await a requisição para validação do token
        ({
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) resolve(true);
      } catch (err) {
        if (!err.response) return;
        const { status } = err.response;
        if (status === 401 || status === 400 || status === 500) resolve(false);
      }
    })();
});

export default checkToken
