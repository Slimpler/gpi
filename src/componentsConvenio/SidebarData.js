import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import * as IconN from "react-icons/bi";
import * as IconF from "react-icons/fi";


export const SidebarData = [
  {
    title: '',
    title: 'Quintero',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
  },

  {
    title: '',
  },

   {
    title: 'Convenios',
    path: '/convenios',
    size: '30%',
    icon: <IconF.FiAlignCenter />,
    cName: 'nav-text',
  },

  {
    title: 'Buscar convenios',
    path: '/buscarconvenios',
    icon: <FaIcons.FaSearch/>,
    cName: 'nav-text'
  },
  {
    title: 'Mis Convenios',
    path: '/misconvenios',
    icon: <IconN.BiDetail/>,
    cName: 'nav-text'
  },
 
  {
    title: 'Otra cosa',
    path: '/Otracosa',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];