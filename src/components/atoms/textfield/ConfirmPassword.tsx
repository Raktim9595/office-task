import { TextField } from "@mui/material";
import { CreateUserProps } from "../../../interfaces/inputProps";
import "./InputField.css";

const ConfirmPassword = ({
  variant = "outlined",
  fullWidth = false,
  label,
  formik,
}: CreateUserProps) => {
  return (
    <div className="input__field__wrapper">
      <TextField
        label={label as string}
        variant={variant}
        fullWidth={fullWidth}
        type="password"
        id="confirmPassword"
        placeholder="Enter placed password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        sx={{
          height: "52px"
        }}
      />
    </div>
  );
};

export default ConfirmPassword;
