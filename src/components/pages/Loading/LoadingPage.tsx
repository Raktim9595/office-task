import "./LoadingPage.css";

import { Loading } from "../../atoms";
import { Stack, Typography } from "@mui/material";

const LoadingPage = () => {
  return (
    <main className="loading__page">
      <Stack gap={"5px"} alignItems={"center"}>
        <Loading size="large" />
        <Typography color={"primary"} fontSize={"20px"}>
          Loading App
        </Typography>
      </Stack>
    </main>
  )
}

export default LoadingPage;