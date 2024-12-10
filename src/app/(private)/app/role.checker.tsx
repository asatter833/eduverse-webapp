"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const RoleChecker = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user =
    localStorage.getItem("user_data") &&
    JSON.parse(localStorage.getItem("user_data") as string);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) return;

    if (pathname.startsWith("/app/admin") && user?.user_role !== "admin") {
      router.replace("/app/admin"); // Redirect to a generic unauthorized page
    }

    if (user.user_role === "faculty" && !pathname.startsWith("/app/faculty")) {
      router.replace("/app/faculty");
    }
    if (user.user_role === "student" && !pathname.startsWith("/app/student")) {
      router.replace("/app/student");
    }
  }, [user]);
  return <>{children}</>;
};

export default RoleChecker;
