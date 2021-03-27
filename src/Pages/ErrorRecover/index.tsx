import React, { useCallback } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaRegSadTear } from 'react-icons/fa'
import Button from '../../components/Button/'
import Header from '../../components/Header'

import { useHistory } from 'react-router-dom'


const ErrorRecover: React.FC = () => {
  const history = useHistory()

    const handleGoBack = useCallback(() => {
        history.push('/')
    }, [history])
  return (
    <>
      <Header />
          <FaRegSadTear className="icon" size={102} />
          <h3>Oops, algo deu errado! Confime seus dados e tente novamente!</h3>
          <Button
            onClick={handleGoBack}
            text="Voltar"
            Icon={FaArrowLeft}
            className="form-button"
          />
    </>
  )
}

export default ErrorRecover
