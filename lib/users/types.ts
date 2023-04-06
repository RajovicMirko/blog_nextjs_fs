export enum UserStatus {
  active = "active",
  inactive = "inactive",
}

export type User = {
  _id: number;
  name: string;
  email: string;
  gender: string;
  status: UserStatus;
};
