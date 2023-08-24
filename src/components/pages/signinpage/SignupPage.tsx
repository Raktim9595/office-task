import { HydraX } from '../../atoms';
import CreateUser from '../../layouts/signup/CreateUser';
import SignUp from '../../orgnanisms/SignupForm/SIgnUp';

interface Props {
  changeSignUp?: () => void;
};

const SignupPage = ({ changeSignUp }: Props) => {
  return (
    <CreateUser>
      <HydraX />
      <SignUp changeSignUp={changeSignUp}  />
    </CreateUser>
  )
}

export default SignupPage