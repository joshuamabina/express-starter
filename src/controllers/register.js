import User from '../user';

export async function showRegistrationForm(request, response) {
  return response
    .status(200)
    .type('html')
    .render('register');
}

export async function registerUser(request, response, next) {
  try {
    await User.create(request.body);
    return response.redirect('/home');
  } catch (error) {
    next({ status: 500, message: error.message, ...error });
  }
}
