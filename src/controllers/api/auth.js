export async function register(request, response) {
  try {
    return response.status(200).json({
      id: '1234',
      email: 'user@example.com',
      password: 'password',
    });
  } catch(error) {
    return response.status(500).json({ message: error.message })
  }
}

export async function login(request, response) {
  try {
    return response.status(200).json({
      id: '1234',
      email: 'user@example.com',
      password: 'password',
    });
  } catch(error) {
    return response.status(500).json({ message: error.message })
  }
}
