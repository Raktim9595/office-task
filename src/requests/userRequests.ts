import axios from "axios";

interface GetAllUsersProps {
  authToken: string;
};
 
export const getAllUsers = async ({ authToken }: GetAllUsersProps) => {
  return await axios.get("http://18.136.197.25:8080/usersWithAuth/getAllSignedUpUsers", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    }
  });
};

export const getLoggedInUser = async({ authToken }: GetAllUsersProps) => {
  return await axios.get("http://18.136.197.25:8080/usersWithAuth/getLoginUserInfo", {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });
};