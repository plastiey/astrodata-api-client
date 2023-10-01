import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const About = () => (
  <Layout title="magneconn - about us">
    <Container>
      <Heading as="h1" fontSize={35} mt={10} mb={5} textAlign={"center"}>
        🚀 Meet the Team
      </Heading>

      <Section delay={0.1} mb={5} >
        <Paragraph>
          Kenjitheman - That's me! As the project developer, I'm passionate about making space data accessible to the world. I've always been fascinated by the cosmos, and this project is a dream come true.
        </Paragraph>
      </Section>

      <Section delay={0.2} mb={5} >
        <Paragraph>
          Math Man - A mathematical genius who crunches numbers to extract meaningful insights from the vast sea of data we receive from NASA. With Math Man on board, we're always on the cutting edge of data analysis.
        </Paragraph>
      </Section>

      <Section delay={0.3} mb={5} >
        <Paragraph>
          Physical Man - Our resident expert in physics and space science. Physical Man ensures that our visualizations are not only beautiful but also scientifically accurate. He's the guiding star of our project.
        </Paragraph>
      </Section>

      <Section delay={0.4} mb={10} >
        <Heading as="h2" fontSize={35} mt={10} mb={5} textAlign={"center"} >
          🌌 Our Mission
        </Heading>
        <Paragraph>
          Our mission is simple yet ambitious: to connect you with the wonders of the universe. We believe that everyone should have the opportunity to explore space, and our project is the bridge that makes it possible. Join us on this cosmic journey as we reach for the stars together!
        </Paragraph>
      </Section>

    </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'
