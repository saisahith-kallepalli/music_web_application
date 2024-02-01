"use client";
import { MyUserContextProvider } from "../hooks/useUser";
interface UserProviderProps {
  children: React.ReactNode;
}
export const UserProvider: React.FC<UserProviderProps> = (props) => {
  const { children } = props;
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};
