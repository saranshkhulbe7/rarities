import Navbar from "@/components/buyer/navbar";
import Profile from "@/components/buyer/profile";
import React from "react";

function buyerDashboard() {
  return (
    <div>
      <Navbar>
        <Profile />
      </Navbar>
    </div>
  );
}

export default buyerDashboard;
