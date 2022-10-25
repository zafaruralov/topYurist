import React, { useRef, useState, } from 'react'
import { Container, Left, Right, UploadImg, InputImg, UpImgText, FirstInput, MultipleSelect, CheckBox, Bottom } from './style'
import {useForm, Controller} from 'react-hook-form'
import Select from 'react-select'

import Frame from '../asset/Frame.png'
import Baaz from '../asset/Безымянный-1 1.png'
import topYu from '../asset/© 2018–2022 Top Yurist.svg'
import iconUser from '../asset/Group.svg'
import uploader from '../utils/uploader'


const Register = () => {

    const [regionList, setRegionList] = useState([])
    const [imgUrl, setImgUrl] = useState(null)

    const hiddenFileInput = useRef(null)

    const handleClick = () => {
        hiddenFileInput.current.click()
    }

    const customStyle = {
        control: (base, state) => ({
            height: '46px',
            width: '418px',
            border:'1px solid #18181C',
            fontSize: '14px',
            borderRadius: '8px',
            color: '#18181C',
            padding: '14px 17px 20px 20px',
            marginBottom: '10px',
            opacity: '0.5',
            display:'flex',
            alignItem:'center',
            justifyContent: 'center'
          }),
    }

    const imageUpload = (event) => {
        console.log(event)
        const fileUploaded = event.taget[0];
        const img = fileUploaded
        setImgUrl(img)
    }

    const {
        control,
        handleSubmit,
        register,
        setValue,
        formState: {errors}
    } = useForm()

    console.log('===>', imgUrl)

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
            <UpImgText>
                <h1 className='auth'>Регистрация</h1>
                <UploadImg>
                    <img className='register_img'
                     src={imgUrl ? imgUrl : iconUser} alt="user-img" />
                </UploadImg>
                <InputImg type='file' 
                {...register('profile_photo', {
                    required:true
                })}
                ref={hiddenFileInput}
                style={{display: 'none'}}
                onChange={imageUpload}
                />
                <p className='registerimg_text' onClick={handleClick}>Добавить фото</p>
            </UpImgText>
            <FirstInput>
                <input type="text" {...register('full_name', {
                    required:true
                })} 
                placeholder='Имя и Фамилия'
                />
                {/* {errors.full_name && (
                    <p className='inputerror-text'>Введите полное имя</p>
                )} */}
            </FirstInput>
            <MultipleSelect>
                <Controller 
                name='region_id'
                control={control}
                rules={{
                    required:true
                }}
                render={({field}) => (
                    <Select
                    {...field}
                    value={field.value}
                    className='multiselect'
                    placeholder='Город/область'
                    styles={customStyle}
                    // options={regionList}
                    />
                )}
                />
                {/* {errors.region_id && <p>Выберите регион</p>} */}
            </MultipleSelect>
            <MultipleSelect>
                <Controller 
                name='region_id'
                control={control}
                rules={{
                    required:true
                }}
                // className='multiselect'
                render={({field}) => (
                    <Select
                    {...field}
                    value={field.value}
                    placeholder='Специализация'
                    options={regionList}
                    styles={customStyle}
                    />
                )}
                />
                {/* {errors.region_id && <p>Выберите регион</p>} */}
            </MultipleSelect>
            <CheckBox>
                <input type="checkbox"
                id='agreement'
                className='checkbox-arg'
                {...register('agreement', {
                    required:true
                })}/>

                <p className="pfverf__agreement-labeltxt">
                Регистрируясь, вы принимаете <a href="#!">публичную оферту</a>{" "}
              </p>
            </CheckBox>
            <Bottom>Далее</Bottom>
        </Right>
    </Container>
  )
}

export default Register