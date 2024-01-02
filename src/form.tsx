import Box from "@mui/system/Box";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { formSchema } from "../src/schemas";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

const hobbies_list: string[] = ["Soccer", "Running", "Hiking", "Swimming"];

export interface FormValues {
  nome: string;
  bdata: Date;
  email: string;
  hobbies: string[];
}

function Form() {
  const inicialValues: FormValues = {
    nome: "",
    bdata: new Date(),
    email: "",
    hobbies: [],
  };
  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        gridTemplateRows: "1/2fr 1fr",
        gridTemplateAreas: `
            "section"
            "button"`,
      }}
    >
      <Formik
        initialValues={inicialValues}
        onSubmit={async (values, actions) => {
          console.log(values);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          actions.resetForm();
        }}
        validationSchema={formSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form id="myForm" onSubmit={handleSubmit} autoComplete="off">
            <Box
              sx={{
                height: "100%",
                gridArea: "section",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <TextField
                type="text"
                name="nome"
                label="Name"
                color="secondary"
                value={values.nome}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={errors.nome && errors.nome}
                error={touched.nome && !!errors.nome}
                fullWidth
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="bdata"
                  label="Date of birth"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  value={values.bdata}
                  onChange={(value) => setFieldValue("bdata", value)}
                  error={touched.bdata && !!errors.bdata}
                  helperText={errors.bdata && errors.bdata}
                />
              </MuiPickersUtilsProvider>
              <TextField
                type="email"
                label="E-mail"
                color="secondary"
                fullWidth
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={touched.email && !!errors.email}
              />
              <FormControl
                error={touched.hobbies && !!errors.hobbies}
                component="fieldset"
                variant="standard"
              >
                <FormLabel component="legend">Hobbies</FormLabel>
                <FormGroup row>
                  {hobbies_list.map((hobbie, index) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="secondary"
                          onChange={handleChange}
                          name="hobbies"
                          key={index}
                          checked={values.hobbies.includes(hobbie)}
                        />
                      }
                      key={index}
                      label={hobbie}
                      value={hobbie}
                    />
                  ))}
                </FormGroup>
                <FormHelperText>
                  {touched.hobbies && errors.hobbies}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box
              sx={{
                gridArea: "button",
                display: "flex",
                justifyContent: "center",
                padding: "0px 10px 0px 10px",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={!!isSubmitting}
                fullWidth
              >
                Send
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
