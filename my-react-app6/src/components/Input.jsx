import {Field, ErrorMessage} from 'formik';

const Input = ({label, type, name, placeholder}) => {
    return(
      <div className='form-group'>
        <label htmlFor={name}>{label}</label>

        <Field
           type={type}
           name={name}
           id={name}
           placeholder={placeholder}
        />
   
        <ErrorMessage
            name={name}
            component='div'
            className='error'
        />
       </div>
    );
};

export default Input;