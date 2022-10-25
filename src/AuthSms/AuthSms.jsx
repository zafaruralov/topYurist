import React, {useEffect, useState} from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import OtpInput from 'react18-input-otp';

// IMG ------
import Frame from '../asset/Frame.png'
import Baaz from '../asset/Безымянный-1 1.png'
import topYu from '../asset/© 2018–2022 Top Yurist.svg'
// -----------

import { Bottom, Container, GoBack, Left, Right, TimeLimiter } from './style'

const AuthSms = () => {
  
  const navigate = useNavigate();
  const [searchParams, _ ] = useSearchParams()
  const phone_number = searchParams.get('phone_number')
  
  
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false)
  
  useEffect(() => {
    if (!phone_number) {
      navigate(-1);
    }
  }, []);

  const [counter, setCounter] = useState(5)
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer)
  }, [counter])

  const handleChange = (code) => {
    setCode(code);
    if(code.length === 6){
      setIsValid(true)
    }
  }

  const onSubmit = ((el) => {
    navigate({
      pathname:'/login'
    })
  })
  
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
          <span className="sms">Мы отправили вам СМС с кодом на номер</span>

          <p className='numberArr'>+998 {phone_number}</p>

            <OtpInput
          value={code}
          onChange={handleChange}
          numInputs={6}
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle={{
            backgroundColor: '#b6bdd0',
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "#18181C",
            marginRight:'16px'
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none"
          }}
        />
        {
          (!isValid && (counter === 0)) ||
          (<TimeLimiter>
            <p>Осталось</p>
            <span>00:{counter}</span>
          </TimeLimiter>)
        }
        {
          (!isValid && (counter === 0)) &&
          (
            <GoBack onClick={onSubmit}>return login page</GoBack>
          )
        }
        <Bottom>
          Далее
        </Bottom>          
        </Right>
    </Container>   
  )
}

export default AuthSms