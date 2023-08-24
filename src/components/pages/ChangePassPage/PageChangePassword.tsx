import { HydraX } from "../../atoms";
import ChangePassword from "../../layouts/changePasswordLayout/ChangePassword";
import ChangePassForm from "../../orgnanisms/changePassForm/ChangePassForm";
import "./PageChangePass.css";

const PageChangePassword = () => {
  return (
    <ChangePassword>
      <HydraX />
      <ChangePassForm />
    </ChangePassword>
  )
}

export default PageChangePassword