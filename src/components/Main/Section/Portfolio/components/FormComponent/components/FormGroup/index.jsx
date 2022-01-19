import {Form, FormControl} from 'react-bootstrap';
import './styles.css';


const FormGroup = ({ id, name, label, type, onChange, input }) => {
    const { value, error } = input;
    return ( 
        <>
        
        <FormControl
            className={`sing-up-input  ${error && error.length ? 'border border-danger': ''}`}
            type={type}
            placeholder={label} 
            id={id} 
            name={name} 
            onChange={onChange} 
            value={value} 
            required 
            />
            {error && error.length ?
                <Form.Text className="text-danger">
                    {error[0]}
                </Form.Text> : ""
            }
        
        {/* <Form.Group className="m-3">
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control 
                className={error && error.length ? 'border border-danger': ''}
                type={type} 
                placeholder={label} 
                id={id} 
                name={name} 
                onChange={onChange} 
                value={value} 
                required 
            />
            {error && error.length ?
                <Form.Text className="text-danger">
                    {error[0]}
                </Form.Text> : ""
            }
        </Form.Group> */}
        </>
    );      
}

export default FormGroup;