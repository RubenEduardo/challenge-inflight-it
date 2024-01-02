import * as yup from "yup";

export const formSchema = yup.object().shape({
  nome: yup.string().required("This field is required*"),
  bdata: yup
    .date()
    .max(new Date(), "Are you from the future? Be honest...")
    .required("This field is required*")
    .default(() => new Date()),
  email: yup
    .string()
    .email("This email is not valid*")
    .required("This field is required*"),
  hobbies: yup
    .array()
    .min(1, "Chose at least one hobbie*")
    .required("This field is required*"),
});
