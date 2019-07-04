export function showRegistrationForm(request, response) {
  return response
    .status(200)
    .type('html')
    .render('register');
}
