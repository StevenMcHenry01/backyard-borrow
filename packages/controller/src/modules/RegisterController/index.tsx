// 3rd party imports
// import * as React from 'react'
import { gql, useMutation } from '@apollo/client'

// My imports

export const useRegisterController = () => {
  const [register, { data }] = useMutation(registerMutation)

  const submit = async (values: any) => {
    await register({ variables: values })
  }

  return {
    submit,
  }
}

const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`
