import { Stack, Typography } from "@mui/material";

interface UserDetailsProps {
  name?: string;
  email?: string;
};

const UserDetails = ({ name, email }: UserDetailsProps) => {
  return (
    <Stack alignItems={"flex-start"} gap={"2px"}>
      <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
        <Typography variant="h6">Name: </Typography>
        <Typography variant="h6">{name}</Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
        <Typography variant="body2">Email: </Typography>
        <Typography variant="body2">{email}</Typography>
      </Stack>
    </Stack>
  )
}

export default UserDetails;