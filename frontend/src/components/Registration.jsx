import Input from "./Input";
import EntrancePage from "./EntrancePage";
import useFormValidation from "../hooks/useFormValidation";
import { EmailRegex } from "../utils/constants";

export default function Registration({name, onSignUp, setIsError}){
  const { values, errors, isInputValid, isValid, handleChange} = useFormValidation()

  function onSubmit(e){
    e.preventDefault()
    onSignUp(values.username, values.email, values.password)
  }

  return(
    <EntrancePage name={name} isValid={isValid} onSubmit={onSubmit} setIsError={setIsError}>
      <Input
        name={'username'}
        placeholder={'Введите ваше имя'}
        value={values.username}
        isInputValid={isInputValid.username}
        error={errors.username}
        onChange={(e) => {
          handleChange(e)
          setIsError(false)
        }}
        type={'text'}
      />
      <Input
        name={'email'}
        placeholder={'E-Mail'}
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        onChange={(e) => {
          handleChange(e)
          setIsError(false)
        }}
        type={'email'}
        pattern={EmailRegex}
      />
      <Input
        name={'password'}
        placeholder={'Пароль'}
        type={'password'}
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