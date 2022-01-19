import { Container,Button } from "react-bootstrap";
import FormCont from "./components/Form";
import {Link} from 'react-router-dom';

const FormComponent = () => {
    return (
        <Container className="form-component pt-2">
            <div className="mb-2 text-right">
                <Button variant="info">
                    <Link to="/portfolio" className="back-btn">Back</Link>
                </Button>
            </div>

            <FormCont />
        </Container>
    )
}

export default FormComponent;