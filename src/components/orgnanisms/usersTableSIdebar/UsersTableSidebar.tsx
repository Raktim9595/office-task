import "./UsersTableSidebar.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useCustomDispatch, useCustomSelector } from "../../../store/hooks";
import { Button } from "../../atoms";
import { removeUser } from "../../../store/userSlice";
import { removeToken } from "../../../store/authTokenSlice";

const UsersTableSidebar = () => {
  const { name } = useCustomSelector(state => state.users);
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    dispatch(removeUser());
    dispatch(removeToken());
    navigate("/auth/create_user");
  }

  return (
    <div className="users__sidebar">
      <Box pt={"20px"} width={"max-content"}>
        <Typography variant={"h6"}>
          {name}
        </Typography>
      </Box>
      <Box width={"max-content"}>
        <Button clickFunction={handleSignOut} variant="text">
          <Typography color={"primary"}>
            Sign Out
          </Typography>
        </Button>
      </Box>
    </div>
  )
}

export default UsersTableSidebar;