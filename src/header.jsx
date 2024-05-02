import React from "react";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src="/logo.png"
        alt="Vita-AI Logo"
        style={{ height: 55, marginLeft: 80 }}
      />
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 40,
          fontWeight: "bold",
          color: "#38B6FF",
          marginRight: 940,
          marginTop: 10,
        }}
      >
        Vita-AI
      </span>

      <div className="login" style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "500",
            fontSize: 24,
            marginRight: 5,
          }}
        >
          Doctor?
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "500",
              fontSize: 24,
              marginRight: 5,
              marginLeft: 5,
              color: "#38B6FF",
            }}
          >
            Login
          </span>
        </span>
        <span color="blue" style={{ marginRight: 90 }}>
          👤
        </span>
      </div>
    </header>
  );
}

export default Header;
