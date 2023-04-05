import { Typography } from "@mui/material";
import Link from "next/link";

export type IUsersPage = object;

type IUsersPageReturn = JSX.Element | null;

const UsersPage = ({}: IUsersPage): IUsersPageReturn => {
  return (
    <>
      <Typography variant="h2">Users page</Typography>
      <Link href={`users/${123}`}>User id 123</Link>
    </>
  );
};

export default UsersPage;
