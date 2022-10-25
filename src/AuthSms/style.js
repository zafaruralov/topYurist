import styled from 'styled-components'



export const Container = styled.div`
height: 100vh;
display: flex;
width:  auto;
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

    .numberArr{
        width: 140px;
        height: 22px;
        font-family: 'Aeroport';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #18181C;
        padding-bottom: 60px;
    }

    h1{
        width: 226px;
        height: 46px;
        font-family: 'Aeroport';
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 46px;
        color: #18181C;
        display: flex;
        padding-bottom: 45px;
        padding-top: 150px;
    }
    .sms{
        font-family: 'Aeroport';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        padding: 45px 0px 8px 0px;
        line-height: 20px;
        color: #18181C;
        opacity: 0.5;
    }
`
export const Bottom = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 14px 0px 10px 0px;

    color: white;
    width: 450px;
    height: 48px;
    background: #1C4FD1;
    border-radius: 8px;
`
export const TimeLimiter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;
    padding-top: 84px;
    opacity: 0.5;
    font-size: 16px;
`
export const GoBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 450px;
    padding-top: 64px;
    cursor: pointer;
    opacity: 0.5;
    font-size: 16px;
`