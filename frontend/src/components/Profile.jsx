import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Input from "./Input";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import useFormValidation from "../hooks/useFormValidation";
import Form from "./Form";
import { EmailRegex } from "../utils/constants";

export default function Profile({name, loggedIn, logOut, editUserData, setIsError, isSuccess, setIsSuccess, setIsEdit, isEdit}){
  const currentUser = useContext(CurrentUserContext)
  const { values, errors, isInputValid, isValid, handleChange, reset} = useFormValidation()

  useEffect(() => {
    reset({ username: currentUser.name, email: currentUser.email})
  }, [reset, currentUser, isEdit])

  function onSubmit(e){
    e.preventDefault()
    editUserData(values.username, values.email)
  }
  return(
    <>
      <Header
        black={true}
        loggedIn={loggedIn}
      />
      <main>
      <section className="profile">
        <div className="container container_profile">
          <h2 className="profile__greeting">Привет, {currentUser.name}</h2>
          <Form
            name={name}
            isValid={isValid}
            onSubmit={onSubmit}
            setIsError={setIsError}
            values={values}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
            setIsEdit={setIsEdit}
            isEdit={isEdit}
            titleButton={'Сохранить'}
            logOut={logOut}
          >
          <div className="profile__input-box">
            <h3 className="profile__input-name">Имя</h3>
            <Input 
              placeholder={'Имя'}
              value={values.username}
              isInputValid={isInputValid.username}
              error={errors.username}
              onChange={handleChange}
              name='username'
              disabled={isEdit ? false : true}
            /> 
          </div>
          <div className="profile__input-box">
            <h3 className="profile__input-name">E-mail</h3>
            <Input 
              placeholder={'E-mail'}
              value={values.email}
              isInputValid={isInputValid.email}
              error={errors.email}
              onChange={handleChange}
              name='email'
              disabled={isEdit ? false : true}
              pattern={EmailRegex}
            /> 
          </div>
          </Form>
        </div>
      </section>
      </main>
    </>
  )
}