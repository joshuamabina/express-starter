import User from '../user';

export async function showRegistrationForm(request, response) {
  return response
    .status(200)
    .type('html')
    .render('register');
}

export async function registerUser(request, response, next) {
  try {
    const user = await User.create(request.body);
    return response.redirect('/home');
  } catch (error) {
    if (!error.status) error = { status: 500, message: error.message, ...error };

    next(error);
  }
}
