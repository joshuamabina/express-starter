import User from "../user";

export async function showLoginForm(request, response) {
  return response.status(200).type("html").render("login");
}

export async function loginUser(request, response, next) {
  try {
    const user = await User.findOne({ email: request.body.email });

    // if (!user) throw new Error("User not found!");

    // if (!user.verifyPassword(request.body.password)) throw new Error("Incorrect password");

    return response.status(200).type("html").render("home", { user });
  } catch (error) {
    next({ status: 500, message: error.message, ...error });
  }
}
