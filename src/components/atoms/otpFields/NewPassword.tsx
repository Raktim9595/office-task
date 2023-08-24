import { TextField } from "@mui/material";
import { OtpInputProps } from "../../../interfaces/inputProps";

const NewPassword = ({
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
        id="newPassword"
        placeholder="Enter password"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
        sx={{
          height: "52px"
        }}
      />
    </div>
  );
};

export default NewPassword;
