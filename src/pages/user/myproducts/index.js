import React, { useEffect } from "react";

import { useRouter } from "next/router";

const MyProductsPage = () => {
  const router = useRouter();
  const role = "seller";
  useEffect(() => {
    if (role !== "seller") {
      router.push("/");
    }
  }, [router.asPath]);

  return role === "seller" ? (
    <div>all seller product details required here</div>
  ) : (
    <div>you are not authorized</div>
  );
};

export default MyProductsPage;
