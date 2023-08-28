export const getAuthTokemFromLocalStorage = (): string => {
  return localStorage.getItem("authToken") as string;
}