import User from "../user";

export async function showLoginForm(request, response) {
  return response.status(200).type("html").render("login");
}

export async function loginUser(request, response) {
  try {
    const user = await User.findOne({ email: request.body.email });

    if (user === null) throw new Error("User not found!");

    if (!user.verifyPassword(request.body.password)) throw new Error("Incorrect email or password!");

    return response.status(200).type("html").render("home", { user });
  } catch (error) {
    return response.status(200).type("html").render("login", { message: error.message, errors: error.errors });
  }
}
