import { Checkbox as MCheckbox, FormControlLabel } from "@mui/material";
import { CheckboxProps } from "../../../interfaces/inputProps";

import "./Checkbox.css";

const Checkbox = (props: CheckboxProps) => {
  const { color, size = "medium", formik } = props;
  return <FormControlLabel
    control={<MCheckbox checked={formik.values.rememberUser} color={color} size={size} />}
    label="Keep me logged in"
    id="rememberUser"
    name="rememberUser"
    onChange={formik.handleChange}
    className="default__checkbox"
  />
};

export default Checkbox;
