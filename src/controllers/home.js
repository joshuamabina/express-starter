export async function welcome(request, response, next) {
  try {
    return response.status(200).type("html").render("welcome");
  } catch (error) {
    next(error);
  }
}

export async function show(request, response, next) {
  try {
    const user = {
      id: "1234",
      email: "user@example.com",
      password: "password",
      name: "Demo User"
    };

    return response.status(200).type("html").render("home", user);
  } catch (error) {
    return next(error);
  }
}

export default show;
