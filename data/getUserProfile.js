const dataEndpoint =
  "https://learn.01founders.co/api/graphql-engine/v1/graphql";

export async function getUserProfile(jwt, query) {
  try {
    const resp = await fetch(dataEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`, // Include the JWT token
      },
      body: JSON.stringify({ query: query }),
    });

    if (!resp.ok) {
      const errorText = await resp.text(); // Capture response text in case of error
      throw new Error(
        `HTTP error! Status: ${resp.status}. Response: ${errorText}`
      );
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching user table:", error);
    throw error;
  }
}
