import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Info = () => (
  <Layout title="magneconn - info">
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

export default Info
export { getServerSideProps } from '../components/chakra'
