// // import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import './FormEns.css'
// import Button from '@material-ui/core/Button';

// const FormEns = () => (
//     <div className="formEns">
//         <h1>Merci de Remplir Ce Formulaire!</h1>
//         <Formik
//             initialValues={{ email: '', password: '' }}
//             validate={values => {
//                 const errors = {};
//                 if (!values.email) {
//                     errors.email = 'Required';
//                 } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
//                     errors.email = 'Invalid email address! Saisir Votre Email Institutionnel';
//                 }
//                 else if ((!values.email.includes("@uae.ac.ma"))){
//                     errors.email = 'Invalid email address! Saisir Votre Email Institutionnel';
//                 }
//                 return errors;
//             }}
//             onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     setSubmitting(false);
//                 }, 400);
//             }}
//         >
//         {({ isSubmitting }) => (
//             <div>
//                 <Form>
//                     Nom Complet : <Field type="nomPrenom" name="nomPrenom" />
//                     <br />
//                     <ErrorMessage name="nomPrenom" component="div" />
//                     <br />
//                     Email Institutionnel : <Field type="email" name="email" />
//                     <br />
//                     <ErrorMessage name="email" component="div" />
//                     <br />
//                     Saisir Votre Password : <Field type="password" name="password" />
//                     <br />
//                     <ErrorMessage name="password" component="div" />
//                     <br />
//                     <Button variant="outlined" color="primary" type="submit" disabled={isSubmitting}>
//                         Submit
//                     </Button>
//                 </Form>
//             </div>
//         )}
//         </Formik>
//     </div>
// );

// export default FormEns;