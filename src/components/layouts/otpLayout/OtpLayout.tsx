import React from "react";
import "./OtpLayout.css";

interface Props {
  children?: React.ReactNode;
}

const OtpLayout = ({ children }: Props) => {
  return (
    <main className="main__layout__container">
      <section className="main__section">
        {children}
      </section>
    </main>
  )
}

export default OtpLayout;