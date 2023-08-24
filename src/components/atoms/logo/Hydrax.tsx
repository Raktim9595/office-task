import hydraX from "../../../assets/hydrax.svg";
import "./Hydra.css";

import clsx from "clsx";

interface LogoProps {
  size?: "small" | "medium" | "large";
};

const Hydrax = ({ size }: LogoProps) => {
  const className: string = clsx("logo__default", {
    logo__small: size === "small",
    logo__large: size === "large",
  });

  return (
    <img
    src={hydraX}
    alt="logo"
    className={className}
  />
  )
}

export default Hydrax;