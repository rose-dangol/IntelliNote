const base_url = " http://localhost:8000/auth/";

export const getLoggedInUser = async (token) => {
  try {
    const userRes = await fetch(base_url + "me/", {
      headers: { Authorization: `Token ${token}` },
    });
    const user = await userRes.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = async (token) => {
  try {
    const res = await fetch(base_url + "users/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch users");
      return;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
  }
};

export const editProfile = async (token, formData) => {
  const response = await fetch(base_url + "profile/", {
    method: "PATCH",
    headers: {
      Authorization: `Token ${token}`,
      // DO NOT set Content-Type manually for FormData
    },
    body: formData,
  });

  const text = await response.text(); // read raw response
  try {
    const data = JSON.parse(text);
    if (!response.ok) throw new Error(data.detail || "Failed to update profile");
    localStorage.setItem("userData", JSON.stringify(data));
    return data;
  } catch (err) {
    console.error("Non-JSON response:", text);
    throw new Error("Failed to update profile. See console for backend error.");
  }
};
