import { useState} from "react";
import { formData, formValidators, initialFormCurrentData } from "../../data";
import FormGroup from "../FormGroup";
import './style.scss';

const FormCont = () => {
    const [formCurrentData, setFormCurrentData] = useState(initialFormCurrentData);

    const getErrorsAfterValidation = (value, validators) => {
        const errors = [];
        validators.forEach(validator => {
            const error = validator(value);
            if (error) {
                errors.push(error);   
            }
        });
        return errors;
    }
    const getValidationValues = (name, value) => {
        const validationValues = { value };
        if (name === "confirmPassword")
            validationValues["password"] = formCurrentData.password.value;
        
        return validationValues;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const validators = formValidators[name];
        const validationValues = getValidationValues(name, value);

        const error = getErrorsAfterValidation(validationValues, validators);

        setFormCurrentData(prev => {
            return {
                ...prev,           
                [name]: {
                    touched: true,
                    error,
                    value
                }
            }
        });
    }

    const getErrorsAfterSubmit = (data) => {
        const keys = Object.keys(data);
        const errorArr = [];
        keys.forEach((key) =>{
            const validationValues = getValidationValues(key, data[key].value);
            let error = getErrorsAfterValidation(validationValues, formValidators[key]);
            setFormCurrentData(prev => {
                return {
                    ...prev,           
                    [key]: {
                        touched: true,
                        error,
                        value : data[key].value
                    }
                }
            });
            errorArr.push(error);
        });

        return errorArr;
    };

    const handleSubmit = (e) => {
        const {name,email,phone,password,confirmPassword} = formCurrentData;
        const errors = getErrorsAfterSubmit(formCurrentData);
        let errorsCount = 0;
        errors.forEach(el => {
            if(el.length){
                errorsCount++;
            }
        });
        if(errorsCount===0){
            const newArr = {
                name : name.value,
                email : email.value,
                phone : phone.value,
                password : password.value,
                confirmPassword : confirmPassword.value
            }
            localStorage.setItem('item',JSON.stringify(newArr));
        }
        
    };
    return (
        <div className="cont mx-auto">
            <div className="form-container sign-up-container">
                <form action="#" className="pt-5 p-3 form">
                    <h1 className="form-title mb-3">Create Account</h1>
                    {formData.map(data => {
                        return (
                            <FormGroup
                                {...data}
                                key={data.id}
                                onChange={handleInputChange}
                                input={formCurrentData[data.name]}
                            />
                        )
                    })}
                    <button onClick={handleSubmit} className="mt-3 sign-up-btn">Sign Up</button>
                </form>
            </div>
            
        </div>
    )
}

export default FormCont;