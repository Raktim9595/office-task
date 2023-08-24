import React from "react";
import "./ChangePassword.css";

interface Props {
  children?: React.ReactNode;
}

const ChangePassword = ({ children }: Props) => {
  return (
    <main className="change__password__layout">
      <section className="change__password__main">
        {children}
      </section>
    </main>
  )
}

export default ChangePassword;