import clsx from "clsx";

import "./Loading.css";

interface LoadingProps {
  size?: "default" | "large";
};

const Loading = ({ size }: LoadingProps) => {
  const className = clsx("loading__svg",{
    loading__svg__page: size === "large",
  });
  return (
    <svg className={className} viewBox="0 0 100 100">
      <path d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92" />
    </svg>
  );
};

export default Loading;
