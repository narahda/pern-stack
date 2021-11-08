import {Toast, ToastBody, ToastHeader} from 'react-bootstrap';

const toast = () => {
   <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <ToastHeader>
            <strong className = "me-auto">SUCCESS</strong>
        </ToastHeader>
        <ToastBody>
            user account created
        </ToastBody>
    </Toast> 
};

export default toast;



