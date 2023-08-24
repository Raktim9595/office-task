import { RefObject, useEffect } from "react";
import { Stack } from "@mui/material";

interface OtpProps {
  firstRef?: RefObject<HTMLInputElement>;
  secoandRef?: RefObject<HTMLInputElement>;
  thirdRef?: RefObject<HTMLInputElement>;
  fourthRef?: RefObject<HTMLInputElement>;
}

const OtpField = (props: OtpProps) => {
  const { firstRef, secoandRef, thirdRef, fourthRef, } = props;

  useEffect(() => {
    firstRef?.current?.focus();
  }, []);

  const handleFirst = () => {
    secoandRef?.current?.focus();
  }

  const handleSecoand = () => {
    thirdRef?.current?.focus();
  }

  const handleThird = () => {
    fourthRef?.current?.focus();
  }

  const handleFourth = () => {
    fourthRef?.current?.blur();
  }

  return (
    <Stack direction="row" alignItems={"flex-start"} justifyContent={"space-between"}>
      <input type="text" onChange={handleFirst} className="input__otp__box" ref={firstRef} />
      <input type="text" onChange={handleSecoand} className="input__otp__box" ref={secoandRef} />
      <input type="text" onChange={handleThird} className="input__otp__box" ref={thirdRef} />
      <input type="text" onChange={handleFourth} className="input__otp__box" ref={fourthRef} />
    </Stack>
  )
}

export default OtpField;