import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        borderBottom: "1px solid #EBF0F5",
      }}
    >
      <img
        src={require("../img/logo.png")}
        alt="logo"
        style={{ width: "120px", height: "30px", marginTop: "8px" }}
      />
      <div
        className="profile"
        style={{
          display: "flex",
          padding: "8px",
          border: "1px solid #EBF0F5",
          borderRadius: "10px",
        }}
      >
        <img
          src={require("../img/pro.png")}
          alt=""
          style={{
            marginRight: "10px",
            width: "26px",
            height: "26px",
          }}
        />
        <h6 style={{ marginBottom: "0px" }}>Abhinav Kashyap</h6>
      </div>
    </div>
  );
};

export default Header;
