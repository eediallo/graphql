const loginEndpoint = "https://learn.01founders.co/api/auth/signin";
// Encode credentials in Base64
function encodeCredentials(usernameOrEmail, password) {
  return btoa(`${usernameOrEmail}:${password}`);
}

export async function getJWT(uername, password) {
  const encodedCredentials = encodeCredentials(uername, password);
  const resp = await fetch(loginEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${encodedCredentials}`,
    },
  });

  if (!resp.ok) {
    const error = await resp.text();
    throw new Error(error || "Invalid credentials or unauthorized access");
  }

  return await resp.text();
}
