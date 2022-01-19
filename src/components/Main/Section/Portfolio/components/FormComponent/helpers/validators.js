export const isRequired = ({value}) => value.length ? undefined : "Field is required";
export const validateEmail = ({value}) => value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? undefined : "Write correct email,please!";
export const validateName = ({value}) => value.match(/^[A-Za-z\s].{2,}/) ? undefined : "Write only letters and at least 2 or more letters,please!";
export const validatePhone = ({value}) => value.match(/^[0]\d{8}$/) ? undefined : "Write only numbers,example. 094160987";
export const validatePassword = ({value}) => value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)  ? undefined : "Write at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
export const validateConfirmPassword = ({value,password}) => value===password  ? undefined : "Passwords did not match";



