import { TextField } from "@mui/material";
import { OtpInputProps } from "../../../interfaces/inputProps";

const ConfirmNewPassword = ({
  variant = "outlined",
  fullWidth = false,
  label,
  formik,
}: OtpInputProps) => {
  return (
    <div className="input__field__wrapper">
      <TextField
        fullWidth={fullWidth}
        label={label as string}
        variant={variant}
        type="password"
        id="confirmPassword"
        placeholder="Enter password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        sx={{
          height: "52px"
        }}
      />
    </div>
  );
};

export default ConfirmNewPassword;
