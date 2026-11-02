const API_URL = "https://test-swagger-2ph6.onrender.com";

async function loginRequest(obj) {
  try {
    let res = await fetch(API_URL + "/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    let data = await res.json();

    if (!res.ok) return null;

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.token;
  } catch (err) {
    return null;
  }
}

export default loginRequest;