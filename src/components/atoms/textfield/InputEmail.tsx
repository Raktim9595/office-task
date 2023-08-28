import { TextField } from "@mui/material";
import { InputProps } from "../../../interfaces/inputProps";

const InputEmail = ({
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
        type="email"
        id="email"
        placeholder="Enter email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{
          height: "52px",
          marginBottom: "4px"
        }}
      />
    </div>
  );
};

export default InputEmail;
