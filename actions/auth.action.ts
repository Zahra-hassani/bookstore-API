"use server";
export async function signUp(prevState: unknown, formData: FormData) {
  try {
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      return {
        success: false,
        user: null,
        message: "Passwords does not matched",
      };
    }
    const data = await fetch(`http://localhost:8000/api/register`, {
      headers: {
        accept: "application/json",
      },
      method: "POST",
      body: formData,
    });
    const response = await data.json();
    // console.log(response);
    return {
      success: true,
      user: response.user,
      message: response.message,
    };
  } catch (err) {
    return {
      success: false,
      user: null,
      message: "Something went wrong",
    };
  }
}
