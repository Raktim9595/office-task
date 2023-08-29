export const getAuthTokemFromLocalStorage = (): string => {
  return localStorage.getItem("authToken") as string;
}

export const getRefreshTokenStorage = (): string => {
  return localStorage.getItem("refreshToken") as string;
}