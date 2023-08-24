import { TextField } from "@mui/material";
import { CreateUserProps } from "../../../interfaces/inputProps";
import nepal from "../../../assets/image 4.png";
import dropdown from "../../../assets/Vector 2.png";

const InputPhone = ({
  variant = "outlined",
  fullWidth = false,
  label,
  formik,
}: CreateUserProps) => {
  return (
    <div className="input__field__wrapper phone__wrapper">
      <div className="flag__box">
        <img src={nepal} alt="Nepal" className="nepal" />
        <img src={dropdown} alt="dropdown" className="dorpdown__phone" />
      </div>
      <TextField
        fullWidth={fullWidth}
        label={label as string}
        variant={variant}
        type="text"
        id="phoneNumber"
        placeholder="Enter phone"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        className="phone__input"
        sx={{
          height: "52px"
        }}
      />
    </div>
  );
};

export default InputPhone;
