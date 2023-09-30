import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const About = () => (
  <Layout title="magneconn - about us">
    <Container>
      <Heading as="h1" fontSize={35} mt={5} mb={5} >
        magneconn team
      </Heading>

      <Section delay={0.1} mb={5} >
        hello magneconn
      </Section>

      <Section delay={0.3} mb={5}>
        hello magneconn
      </Section>

      <Section delay={0.5} mb={5}>
        hello magneconn
      </Section>

      <Section delay={0.5} mb={5}>
        hello magneconn
      </Section>

      <Section delay={0.5} mb={5}>
        hello magneconn
      </Section>

      <Section delay={0.5}>
        hello magneconn
      </Section>
    </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'
