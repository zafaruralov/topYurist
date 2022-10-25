import styled from 'styled-components'

export const Header = styled.div`

p{
    color: white;
}
`
export const Container = styled.div`
background: #1C4FD1;
height: 80px;
display: flex;
align-self: center;
/* width: 2600px; */
display: flex;
justify-content: space-around;
`
export const Logos = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const NavbarLogo = styled.div`
display: flex;
align-items: center;
gap: 50px;


.top_yurist{
    height: 46px;
    width: 80px;
}

.solid{
    height: 24px;
    width: 24px;
}

.header__link-txt{
    height: 20px;
    width: 35px;
}
`
export const AvatarImage = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
/* flex-direction: column; */

li{
    align-items: center;
    justify-content: space-around;
}
`