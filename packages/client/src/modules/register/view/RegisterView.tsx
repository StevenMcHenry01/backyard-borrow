// 3rd party imports
import * as React from 'react'
import { Formik, Form } from 'formik'
import {
  TextField,
  Button,
  makeStyles,
  InputAdornment,
  IconButton,
  Typography,
  Link,
  FormControl,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

// My imports
import {registerValidationScheme} from '@backyard-borrow/common'

const RegisterView = () => {
  // STYLING
  // const theme = useTheme()
  const useStyles = makeStyles({
    form: {
      width: '300px',
      margin: '0 auto',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
  const classes = useStyles()

  // ~ Logic
  const [showPassword, handleShowPassword] = React.useState(false)

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          // make async call
          console.log(data)
          setSubmitting(false)
        }}
        validationSchema={registerValidationScheme}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          touched,
          dirty,
          handleReset,
          errors,
        }) => (
          <Form className={classes.form}>
            <TextField
              autoComplete='new-password'
              placeholder='email'
              name='email'
              label='email'
              error={errors.email ? true : false}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.email && touched.email && errors.email}
            />
            <TextField
              placeholder='password'
              label='password'
              name='password'
              error={errors.password ? true : false}
              helperText={
                errors.password && touched.password && errors.password
              }
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => {
                        handleShowPassword(!showPassword)
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Typography>
              <Link href='#'>Forgot Password</Link>
            </Typography>
            <FormControl>
              <Button
                disabled={isSubmitting}
                variant='contained'
                color='primary'
                type='submit'
              >
                Register
              </Button>
            </FormControl>

            <Typography>
              or <Link href='#'>Sign In</Link>
            </Typography>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default RegisterView
