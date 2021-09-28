import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Mun. Quintero
            </SocialLogo>
            <WebsiteRights>
              Mun.Quintero © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/municipalidadquintero" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink href="https://www.instagram.com/i_muniquintero/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink href="https://www.youtube.com/channel/UCt031on7g2LdhtY5AGUXvUg" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink href="https://twitter.com/muniquintero" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
           {/*  <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
