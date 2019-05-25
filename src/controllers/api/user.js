export async function getAuthUser(request, response) {
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
        error,
        message,
      });
  }
}

export async function getUsers(request, response) {
  try {
    return response
      .status(200)
      .json({
        id: '1234',
        email: 'user@example.com',
        password: 'password',
      });
  } catch(error) {
    return response
      .status(500)
      .json({
        error,
        message,
      });
  }
}

export async function findUser(request, response) {
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
    return response
      .status(500)
      .json({
        error,
        message,
      });
  }
}
