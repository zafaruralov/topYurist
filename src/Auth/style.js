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
.second{
height: 458px;
width: 458px;
left: 209px;
top: 290px;
border-radius: 0px;
padding-bottom: 30px;
padding-top: 10px;

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

    :focus{
        color: red;
    }
}
.third{
height: 20px;
width: 153px;
position: absolute;
bottom: 20px;
}
`
export const Right = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 80px;
    position: relative;
    .authorization__input-input{
        margin-left: 70px;
        width: 356px;
        padding-left: 10px;
        height: 48px;
        opacity: 0.3;
        border: 1px solid #858DA3;
        border-radius: 8px;
    }

    .auth{
        width: 226px;
        height: 46px;
        font-family: 'Aeroport';
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 46px;
        color: #18181C;
        display: flex;
        padding-left: 60px;
        padding-bottom: 80px;
        padding-top: 150px;
        justify-content: flex-start;
    }

    .authorization_errortxt{
        padding-left: 72px;
        padding-top: 10px;
        display: flex;
        height: 20px;
        font-family: 'Aeroport';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #FF3535;
    }
    .authorization__input-input-text{
        margin-left: 70px;
        width: 356px;
        padding-left: 10px;
        height: 48px;
        opacity: 0.3;
        border: 1px solid #FF3535;
        border-radius: 8px;
    }
`
export const Buttons = styled.div`
    padding-left: 60px;
    display: flex;

.typeUser{
    margin: 6px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 38px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;

    :focus{
        background: rgba(28, 79, 209, 0.1);
    }
}
`
export const Enter = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 74px 0px 10px 70px;

color: white;
width: 356px;
height: 48px;
background: #1C4FD1;
border-radius: 8px;
`
export const Text = styled.div`
    font-family: 'Aeroport';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding: 45px 0px 25px 70px;
    line-height: 20px;
    color: #18181C;
    opacity: 0.5;
`
export const LastText = styled.div`
    font-family: 'Aeroport';
    padding: 15px 0px 25px 70px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #18181C;

    opacity: 0.5;
`