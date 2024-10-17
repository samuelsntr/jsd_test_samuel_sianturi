import axios from "axios";

export const login = async (username: string, password: string) => {
  const loginEndpoint = "https://test.api.sahabatlautlestari.com/auth/login";

  try {
    const response = await axios.post(loginEndpoint, {
      username,
      password,
    });

    const { accessToken, refreshToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return response.data; // Optionally return this if you need further actions
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error("Login failed: " + error.response.data.message || error.message);
    }
    throw new Error("Login error: " + error.message);
  }
};
