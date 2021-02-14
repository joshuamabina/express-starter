import User from "../user";

export async function showRegistrationForm(request, response) {
  return response.status(200).type("html").render("register");
}

export async function registerUser(request, response, next) {
  try {
    const user = await User.create(request.body);

    if (user) {
      return response.status(200).type("html").render("home", { user });
    } else {
      throw new Error('Whoops! A problem occurred while creating a user!');
    }
  } catch (error) {
    next({ status: 500, message: error.message, ...error });
  }
}
