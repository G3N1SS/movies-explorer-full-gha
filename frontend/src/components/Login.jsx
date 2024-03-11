import Input from "./Input";
import EntrancePage from "./EntrancePage";
import useFormValidation from "../hooks/useFormValidation";

export default function Login({name, setIsError, onSignIn}){
  const { values, errors, isInputValid, isValid, handleChange } = useFormValidation()

  function onSubmit(evt) {
    evt.preventDefault()
    onSignIn(values.email, values.password)
  }

  return(
    <EntrancePage name={name} setIsError={setIsError} isValid={isValid} onSubmit={onSubmit}>
      <Input
        name={'email'}
        type='email'
        placeholder={'E-mail'}
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        onChange={(evt) => {
          handleChange(evt)
          setIsError(false)
        }}
      />
      <Input
        name={'password'}
        placeholder={'Пароль'}
        type='password'
        title='Пароль'
        minLength='3'
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        onChange={(evt) => {
          handleChange(evt)
          setIsError(false)
        }}
      />
    </EntrancePage>
  )
}