import React, { useContext, useState } from 'react'
import {useForm, Controller} from 'react-hook-form'
import {PatternFormat} from 'react-number-format';
// imgs -----
import Frame from '../asset/Frame.png'
import Baaz from '../asset/Безымянный-1 1.png'
import topYu from '../asset/© 2018–2022 Top Yurist.svg'

import './style'
import { Buttons, Container, Enter, Input, LastText, Left, Right,Text } from './style'
import { useNavigate } from 'react-router-dom';


const roles =[
  { label: "Я юрист", value: "lawyer" },
  { label: "Я пользователь", value: "user" },
]

const Auth = () => {
  
  let navigate = useNavigate()
  const [role, setRole] = useState('lawyer')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();  
  
  const onSubmit = ({phone_number}) => {
    let phone = phone_number.replace(/\D/g, "").slice(-9);
    console.log(phone, phone_number)
    navigate({
      pathname:'/sms',
      search: `?phone_number=${phone}&role=${role}`,
    })
  }
  return (
    <Container>
        <Left>
            <img className='first' src={Frame} alt="" />
            <ul className='change'>
                <li>Ўз</li>
                <li>O’z</li>
                <li>En</li>
                <li>Ру </li>
            </ul>
            <img className='second' src={Baaz} alt="" />
            <img className='third' src={topYu} alt="" />
        </Left>
        <Right>
            <h1 className='auth'>Авторизация</h1>
            <Buttons>
              {roles.map((el) => (
                <button key={`${el.value}`}
                onClick={() => setRole(el.value)}
                className='typeUser'>
                  {el.label}
                </button>
              ))}
            </Buttons>
            <Text>
                <span>
                    Введите ваш номер телефона
                </span>
            </Text>

            <div>

            <Controller 
              name="phone_number"
              control={control}
              rules={{
                minLength: 18,
                required: true,
              }}
              render={({ field }) => (
                <PatternFormat
                  // {...field}
                  mask=""
                  allowEmptyFormatting
                  format="+(998)## ### ## ##"
                  placeholder="+(998)90 000-00-00"
                  // onChange={(e) => field.onChange(parseInt(e.target.value), console.log(e.target.value))}
                  onChange={(e) =>field.onChange(e.target.value)}
                  className={`${errors.phone_number ? `authorization__input-input-text` : `authorization__input-input`}`}
                  />
                  )}
                />
            {errors.phone_number && (
              <p className="authorization_errortxt">
                Не существующий номер
              </p>
            )}
            </div>
                
            <Enter 
                onClick={handleSubmit(onSubmit)}>Войти
            </Enter>
            <LastText>
                <span>Используя наш сервис, вы принимаете {'  '} </span>
                <a href="#!">публичную оферту</a>
            </LastText>
        </Right>
    </Container>
    )
}

export default Auth