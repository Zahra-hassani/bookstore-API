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

export async function login(prevState: unknown, formData: FormData) {
  try {
    const data = await fetch(`http://localhost:8000/api/login`, {
      headers: {
        accept: "application/json",
      },
      method: "POST",
      body: formData,
    });
    const response = await data.json();
    console.log(response);
    return {
      success: true,
      message: response.message,
      user: response.user,
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong",
      user: null,
    };
  }
}
