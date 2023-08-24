import SIgnIn from "../../orgnanisms/SignInForm/SIgnIn";
import SignUpLayout from "../../layouts/signup/SignUpLayout";
import { HydraX } from "../../atoms";

interface Props {
  changeSignUp?: () => void;
}

const SignInPage = ({ changeSignUp }: Props) => {

  return (
    <SignUpLayout>
      <HydraX />
      <SIgnIn changeSingUp={changeSignUp} />
    </SignUpLayout>
  );
};

export default SignInPage;
