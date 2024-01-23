
import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou [...]</Name>
        <Function>FullStack Developer</Function>
        <Intro>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi assumenda eius commodi inventore laboriosam, praesentium provident! Blanditiis, quidem voluptates dolorum, accusantium id, voluptatem ex fugiat voluptas dicta odio vero!
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}