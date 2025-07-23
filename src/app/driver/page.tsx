import { redirect } from "next/navigation";

export default function Page() {
  //check if token is ok
  //if not redirect to sign in
  // if yes redirect to driver
  return redirect("/driver/driver");
}
