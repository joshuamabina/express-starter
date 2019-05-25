export async function show (request, response) {
  try {
    const user = {
      id: '1234',
      email: 'user@example.com',
      password: 'password',
    };

    return response
      .status(200)
      .type('html')
      .render('home', user);
  } catch(error) {
    return response
      .status(500)
      .json(error);
  }
}

export default show;
