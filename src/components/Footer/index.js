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
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Nosotros</FooterLinkTitle>
              <FooterLink to="/entrar">Información</FooterLink>
              {/* <FooterLink to="/entrar">Testimonials</FooterLink>
              <FooterLink to="/entrar">Careers</FooterLink>
              <FooterLink to="/entrar">Investors</FooterLink>
              <FooterLink to="/entrar">Terms of Service</FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contactanos</FooterLinkTitle>
              <FooterLink to="/entrar">Contacto</FooterLink>
             {/*  <FooterLink to="/entrar">Support</FooterLink>
              <FooterLink to="/entrar">Destinations</FooterLink>
              <FooterLink to="/entrar">Sponsorships</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
           {/*  <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/entrar">Submit video</FooterLink>
              <FooterLink to="/entrar">Ambassadors</FooterLink>
              <FooterLink to="/entrar">Agency</FooterLink>
              <FooterLink to="/entrar">Influencer</FooterLink>
            </FooterLinkItems> */}
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
              <FooterLink to="/entrar">Instagram</FooterLink>
              <FooterLink to="/entrar">Facebook</FooterLink>
              <FooterLink to="/entrar">Youtube</FooterLink>
              <FooterLink to="/entrar">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Mun. Quintero
            </SocialLogo>
            <WebsiteRights>
              Mun.Quintero © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
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
