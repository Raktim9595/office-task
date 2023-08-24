import { Checkbox as MCheckbox, FormControlLabel, Typography } from "@mui/material";
import { SignUpCheckbox } from "../../../interfaces/inputProps";

const AgreeTermsCheck = (props: SignUpCheckbox) => {
  const { color, size = "medium", formik } = props;
  return <div>
  <FormControlLabel
    control={<MCheckbox checked={formik.values.agreeTerms} color={color} size={size} />}
    label="Accept terms and conditions"
    name="agreeTerms"
    id="agreeTerms"
    onChange={formik.handleChange}
  />
  <Typography color={"red"} component="span" height={"1px"} display={"block"} fontSize={"12px"}>{
    Boolean(formik.errors.agreeTerms && formik.touched.agreeTerms) && "Terms must me agreed"
}</Typography>
  </div>
};

export default AgreeTermsCheck;
