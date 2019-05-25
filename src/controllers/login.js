export function showLoginForm(request, response) {
  return response
    .status(200)
    .type('html')
    .render('login');
}

export function login(request, response) {
  return response
    .status(200)
    .type('html')
    .render('home');
}
