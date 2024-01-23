import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/peddrobatista" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/peddrobatistta/" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/peddrobatista" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="peddrobatista2022@gmail.com" 
        />
      </Content>
    </Container>
  )
}