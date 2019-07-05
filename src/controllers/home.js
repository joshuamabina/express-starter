export async function welcome (request, response) {
  try {
    return response
      .status(200)
      .type('html')
      .render('welcome');
  } catch (error) {
    next(error);
  }
}

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
      .render('home');
  } catch(error) {
    return response
      .status(500)
      .json(error);
  }
}

export default show;
