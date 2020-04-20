import * as React from 'react'
import RegisterView from './view/RegisterView'
import { useRegisterController } from '@backyard-borrow/controller'

export const RegisterConnector = () => {
  const {submit} = useRegisterController()
  return (
      <RegisterView submit={submit}/> 
  )
}
