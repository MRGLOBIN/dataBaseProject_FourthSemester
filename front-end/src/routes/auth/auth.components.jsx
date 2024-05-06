import SignInForm from '../../components/sign-in-form/sign-in-form.components'
import SignupForm from '../../components/sign-up-form/sign-up-form.components'

import './auth.styles.scss'

const Auth = () => {
  return (
    <div className='auth-constainer bg-black-200 pl-20 pr-20 pt-8 pb-8'>
      <SignInForm />
      <SignupForm />
    </div>
  )
}

export default Auth
