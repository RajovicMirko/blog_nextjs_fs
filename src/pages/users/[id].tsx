import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export type IUserPage = object;

type IUserPageReturn = JSX.Element | null;

const UserPage = ({}: IUserPage): IUserPageReturn => {
  const {
    query: { id },
  } = useRouter();

  return <Typography variant="h2">User page {id}</Typography>;
};

export default UserPage;
