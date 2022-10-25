import React from 'react'
import './style'
import { AvatarImage, Container, Header, Logos, NavbarLogo } from './style'

// assets
import imageLogo from "../assets/images/header/logo.svg";
import imageLink_1 from "../assets/images/header/link-1.svg";
import imageLink_1st from "../assets/images/header/linkst-1.svg";
import imageLink_2 from "../assets/images/header/link-2.svg";
import imageLink_2st from "../assets/images/header/linkst-2.svg";
import imageLink_3 from "../assets/images/header/link-3.svg";
import imageLink_3st from "../assets/images/header/linkst-3.svg";
import imageLink_4 from "../assets/images/header/link-4.svg";
import imageLink_4st from "../assets/images/header/linkst-4.svg";
import imageAvatar from "../assets/images/header/avatar.jpg";

const languages = [
  {
    title: "Ўз",
    key: "uz",
  },
  {
    title: "O’z",
    key: "lat",
  },
  {
    title: "En",
    key: "en",
  },
  {
    title: "Ру",
    key: "ru",
  },
]

const Navbar = () => {



  return (
    <Header>
      <Container>
          <NavbarLogo>
            <img src={imageLogo} alt="icon" className='top_yurist' />

            <Logos>
					  <img className="solid" src={imageLink_1st} alt="icon" />
				    <p className="header__link-txt">Услуги</p>
            </Logos>

            <Logos>
					  <img className="solid" src={imageLink_2} alt="icon" />
				    <p className="header__link-txt">Услуги</p>
            </Logos>

            <Logos>
					  <img className="solid" src={imageLink_3} alt="icon" />
				    <p className="header__link-txt">Услуги</p>
            </Logos>

            <Logos>
					  <img className="solid" src={imageLink_4} alt="icon" />
				    <p className="header__link-txt">Услуги</p>
            </Logos>
          </NavbarLogo>
          <AvatarImage>
              <div>
              <ul className="header__lang-list">
                {languages.map((el, ind) => (
                  <li key={`${el.key}-${ind}`}>
                    {el.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={imageAvatar} alt="avatar" />
            </div>
          </AvatarImage>
      </Container>
    </Header>
  )
}

export default Navbar