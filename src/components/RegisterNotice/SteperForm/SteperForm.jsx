import React, { useState } from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import {
  Stepper, Step, StepLabel, Button, TextField, Box, Typography, Select, MenuItem, CircularProgress, Snackbar, Alert,
} from '@mui/material';
import axios from 'axios';
import Lottie from "lottie-react";
import doneAnimation from "../../../animation/done.json";

const steps = ['المعلومات الأساسية', 'تأكيد البريد الإلكتروني', 'إدخال كود التفعيل'];

const validationSchema = [
  Yup.object({
    name: Yup.string().required('الاسم مطلوب'),
    email: Yup.string()
      .email('بريد إلكتروني غير صحيح')
      .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'يجب استخدام بريد إلكتروني من نوع جيميل')
      .required('البريد الإلكتروني مطلوب'),
    class: Yup.string().required('الشعبة مطلوبة'),
  }),
  Yup.object(),
  Yup.object({
    resetCode: Yup.string().required('كود التفعيل مطلوب'),
  }),
];

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Select
        {...field}
        {...props}
        error={meta.touched && !!meta.error}
      >
        <MenuItem value="">اختر الشعبة</MenuItem>
        <MenuItem value="A">A</MenuItem>
        <MenuItem value="B">B</MenuItem>
        <MenuItem value="C">C</MenuItem>
        <MenuItem value="D">D</MenuItem>
        <MenuItem value="E">E</MenuItem>
        <MenuItem value="F">F</MenuItem>
        <MenuItem value="مسائي">مسائي</MenuItem>
      </Select>
      {meta.touched && meta.error ? (
        <Typography variant="body2" color="error">
          {meta.error}
        </Typography>
      ) : null}
    </>
  );
};

const RegistrationStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setVerificationError(''); // Reset verification error message
    setErrorMessage('');

    if (activeStep === 0) {
      try {
        await axios.post('https://mlazimy-api.vercel.app/notice/signup', {
          name: values.name,
          email: values.email,
          class: values.class,
        });
        handleNext();
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
          setSnackbarOpen(true);
        } else {
          console.error('Error sending step 1 data:', error);
        }
      } finally {
        setIsLoading(false);
      }
    } else if (activeStep === steps.length - 1) {
      try {
        await axios.post('https://mlazimy-api.vercel.app/notice/verifiecode', {
          resetCode: values.resetCode,
        });
        handleNext();
      } catch (error) {
        console.error('Error sending step 3 data:', error);
        setVerificationError('رمز التفعيل غير صحيح. يرجى التحقق من الرمز والمحاولة مرة أخرى.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      handleNext();
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        {activeStep === steps.length ? (
          <Typography variant="h5" align="center">
            تمت عمليه التسجيل بنجاح 
            <Lottie
              style={{ height: "100px" }}
              loop={false}
              animationData={doneAnimation}
            />
          </Typography>
        ) : (
          <Formik
            initialValues={{
              name: '',
              email: '',
              class: '',
              resetCode: '',
            }}
            validationSchema={validationSchema[activeStep]}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                {activeStep === 0 && (
                  <>
                    <Field
                      as={TextField}
                      name="name"
                      label="الاسم"
                      fullWidth
                      margin="normal"
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                    <Field
                      as={TextField}
                      name="email"
                      label="البريد الإلكتروني"
                      fullWidth
                      margin="normal"
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                    <Field
                      as={MySelect}
                      name="class"
                      label="الشعبة"
                      fullWidth
                    />
                  </>
                )}
                {activeStep === 1 && (
                  <Typography variant="body1" align="center" sx={{fontSize:"22px" , fontFamily: "'Almarai', sans-serif"}}>
                    تم إرسال كود التفعيل إلى بريدك الإلكتروني.
                  </Typography>
                )}
                {activeStep === 2 && (
                  <>
                    <Field
                      as={TextField}
                      name="resetCode"
                      label="كود التفعيل"
                      fullWidth
                      error={touched.resetCode && !!errors.resetCode}
                      helperText={touched.resetCode && errors.resetCode}
                    />
                    {verificationError && (
                      <Typography variant="body2" color="error">
                        {verificationError}
                      </Typography>
                    )}
                  </>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{fontFamily:"'Almarai', sans-serif"}}
                  >
                    رجوع
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{fontFamily:"'Almarai', sans-serif"}}
                    disabled={isLoading}
                  >
                    {activeStep === steps.length - 1 ? 'إرسال' : 'التالي'}
                  </Button>
                </Box>
                {isLoading && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <CircularProgress />
                  </Box>
                )}
              </Form>
            )}
          </Formik>
        )}
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleSnackbarClose} severity="error" variant="filled"  sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegistrationStepper;
