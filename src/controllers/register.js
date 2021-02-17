import User from "../user";

export async function showRegistrationForm(request, response) {
  return response.status(200).type("html").render("register");
}

export async function registerUser(request, response) {
  try {
    const user = await User.create(request.body);

    if (user) {
      return response.status(200).type("html").render("home", { user });
    } else {
      throw new Error("Whoops! A problem occurred while creating a user!");
    }
  } catch (error) {
    return response.status(200).type("html").render("register", { message: error.message, errors: error.errors });
  }
}
