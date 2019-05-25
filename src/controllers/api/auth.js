export async function register(request, response) {
  try {
    const user = {
      id: '1234',
      email: 'user@example.com',
      password: 'password',
    };

    return response
      .status(200)
      .json(user);
  } catch(error) {
    const { message } = error;

    return response
      .status(500)
      .json({
        message,
        error,
      });
  }
}

export async function login(request, response) {
  try {
    const user = {
      id: '1234',
      email: 'user@example.com',
      password: 'password',
    };

    return response
      .status(200)
      .json(user);
  } catch(error) {
    const { message } = error;

    return response
      .status(500)
      .json({
        message,
        error,
      });
  }
}
