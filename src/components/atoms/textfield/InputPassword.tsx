import { TextField } from "@mui/material";
import { InputProps } from "../../../interfaces/inputProps";

const InputPassword = ({
  variant = "outlined",
  fullWidth = false,
  label,
  formik,
}: InputProps) => {
  return (
    <div className="input__field__wrapper">
      <TextField
        fullWidth={fullWidth}
        label={label as string}
        variant={variant}
        type="password"
        id="password"
        placeholder="Enter password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        sx={{
          height: "52px"
        }}
      />
    </div>
  );
};

export default InputPassword;
