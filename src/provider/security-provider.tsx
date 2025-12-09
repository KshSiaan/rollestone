import { getProfileApi } from "@/api/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { UserProvider } from "@/context/user-context";
import { idk } from "@/lib/utils";

export default async function SecurityProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const token = (await cookies()).get("token")?.value;

  if (!token) return redirect("/logout");

  const user: idk = await getProfileApi({ token });

  if (!user.ok) return redirect("/logout");

  return <UserProvider initialUser={user.data}>{children}</UserProvider>;
}
