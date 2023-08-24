import { TextField } from "@mui/material";
import { CreateUserProps } from "../../../interfaces/inputProps";

const InputText = ({
  variant = "outlined",
  fullWidth = false,
  label,
  formik,
}: CreateUserProps) => {
  return (
    <div className="input__field__wrapper">
      <TextField
        fullWidth={fullWidth}
        label={label as string}
        variant={variant}
        type="text"
        id="username"
        placeholder="Enter username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        sx={{
          height: "52px"
        }}
      />
    </div>
  );
};

export default InputText;
