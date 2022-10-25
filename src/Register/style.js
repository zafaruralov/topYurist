import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
display: flex;
`
export const Left = styled.div`
width: 45%;
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
padding-top: 80px;
position: relative;

 .first{
    height: 80.51605224609375px;
    width: 136.0623016357422px;
 }
.change{
    list-style: none;
    cursor: pointer;
    font-family: 'Aeroport';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.41px;
    color: #1C4FD1;
    opacity: 0.4;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    gap: 20px;
    align-items: center;   
}
.second{
height: 458px;
width: 458px;
left: 209px;
top: 290px;
border-radius: 0px;
padding-bottom: 30px;
padding-top: 10px;
}

.third{
height: 20px;
width: 153px;
position: absolute;
bottom: 20px;
}
`
export const Right = styled.div`
margin-left: 100px;
width: 55%;
display: flex;
flex-direction: column;
height: 100vh;
padding-top: 80px;
position: relative;
/* background-color: red; */

h1{
    /* width: 226px; */
    height: 46px;
    font-family: 'Aeroport';
    font-style: normal;
    font-weight:900;
    font-size: 34px;
    line-height: 46px;
    color: #18181C;
    display: flex;
    padding-bottom: 45px;
    padding-top: 100px;
    justify-content: center;
    align-items: center;
}
`
export const UpImgText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;

    .registerimg_text{
        width: 117px;
        height: 22px;
        font-family: 'Aeroport';
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 22px;
        color: #1C4FD1;
        cursor: pointer;
    }
`

export const UploadImg = styled.div`
padding-bottom: 12px;
padding-top: 33px;


`
export const InputImg = styled.input`
`
export const FirstInput = styled.div`
padding: 20px 80px;
input{
    font-family: 'Aeroport';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #18181C;

    opacity: 0.5;
    padding: 14px 292px 14px 20px;
    width: 416px;
    height: 48px;
    opacity: 0.3;
    border: 1px solid #858DA3;
    border-radius: 8px;
}
`
export const MultipleSelect = styled.div`
width: 500px;
padding-left: 80px;
border: none;
`
export const CheckBox = styled.div`
display: flex;
gap: 5px;
padding-left: 86px;
padding-top: 20px;
color: #18181C;

a{
    color: #18181C;
}
`
export const Bottom = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 14px 0px 10px 80px;

    color: white;
    width: 450px;
    height: 48px;
    background: #1C4FD1;
    border-radius: 8px;
`