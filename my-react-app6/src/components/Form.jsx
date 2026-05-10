import {Formik, Form} from 'formik';
import {object, string} from 'yup';
import Input from  './Input'

const RegistrationSchema = object().shape({
    name: string()
      .min(2, "Занадто коротке ім'я")
      .max(12, "Занадто довге ім'я")
      .required("Обов'язкове поле"),

    email: string()
      .email('Неправильний формат електронної пошти')
      .required("Обов'язкове поле"),

    password: string()
      .min(6, 'Пароль повинен містити мінімум 6 символів')
      .required("Обов'язкове поле"),
});

const RegistrationForm = () => {

    return (
    <div className='form-container'>
        <h2>Реєстрація</h2>
        <Formik
           initialValues={{
              name:'',
              email:'',
              password:''}}
           validationSchema={RegistrationSchema}
           onSubmit={(values, { setSubmitting }) => {
             console.log('Дані форми:', values);
             setSubmitting(false);
             }}
        >

    {({isSubmitting}) => (
        <Form className='form'>
            <Input
              label="Ім'я"
              type='text'
              name='name'
              placeholder="Введіть ім'я"
            />

            <Input
              label="Email"
              type='email'
              name='email'
              placeholder="Введіть email"
            />

            <Input
              label="Пароль"
              type='password'
              name='password'
              placeholder="Введіть пароль"
            />

            <button
                type = 'submit'
                disabled={isSubmitting}>
                    Зареєструватися
            </button>

        </Form>
    )}
    </Formik>
    </div>
    )
}

export default RegistrationForm;