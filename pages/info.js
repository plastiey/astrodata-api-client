import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from "../components/paragraph"

const Info = () => (
  <Layout title="magneconn - info">
    <Container>
      <Heading as="h1" fontSize={35} mt={10} mb={5} textAlign={"center"}>
        magneconn team
      </Heading>

      <Section delay={0.1} mb={5} >
        <Paragraph>
          🚀 Greetings, fellow space enthusiasts! I'm Kenjitheman, and I'm thrilled to introduce you to the exciting project we've been working on for NASA. Our mission is to make the vast universe more accessible through data visualization and real-time information.
        </Paragraph>
      </Section>

      <Section delay={0.2} mb={5} >
        <Paragraph>
          📡 At the heart of our project is a powerful API, meticulously crafted in Golang, designed to seamlessly collect and distribute mission-critical data. This backend serves as the backbone of our entire system, ensuring that you receive up-to-the-minute information from NASA's missions and space explorations.
        </Paragraph>
      </Section>

      <Section delay={0.3} mb={5} >
        <Paragraph>
          🌌 To bring the cosmos closer to you, we've harnessed the capabilities of the E-Charts Golang library. With this library, we're able to visualize complex data in a way that's not only informative but also visually stunning. Prepare to embark on a cosmic journey like never before!
        </Paragraph>
      </Section>

      <Section delay={0.4} mb={5} >
        <Paragraph>
          🛰️ But that's not all! Our project comprises a dedicated client-side interface that will provide you with a user-friendly experience. You'll be able to explore the cosmos, track missions, and delve into the mysteries of space, all at your fingertips.
        </Paragraph>
      </Section>

      <Section delay={0.5} mb={5} >
        <Paragraph>
          👨‍🚀 So, stay tuned as we continue to work tirelessly to make space more accessible to everyone. Join me, Kenjitheman, and the brilliant minds of Math Man and Physical Man (among others) as we unveil the wonders of the universe.
        </Paragraph>
      </Section>

      <Section delay={0.6} mb={5} >
        <Paragraph>
          🌠 Get ready for liftoff, and let's explore the cosmos together!
        </Paragraph>
      </Section>

    </Container>
  </Layout>
)

export default Info
export { getServerSideProps } from '../components/chakra'
