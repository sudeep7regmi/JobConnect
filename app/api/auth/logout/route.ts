import { cookies } from "next/headers";
    import { redirect } from "next/navigation";

const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete({ name: "token", path: "/" });
  redirect("/");
};

export { logout as POST };