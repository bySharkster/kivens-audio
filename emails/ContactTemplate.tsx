import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { ContactFormValues } from '@/types/schema.zod'

export const ContactTemplate = ({
  name,
  email,
  message,
}: ContactFormValues) => {

  return (
    <Html>
      <Head />
      <Preview>Nueva solicitud de evento de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            Nueva Solicitud de Evento - Kivens Audio
          </Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Nombre:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Hr style={hr} />
            <Text style={text}>
              <strong>Mensaje:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            Este mensaje fue enviado desde el formulario de contacto de Kivens Audio
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#1E1E3F',
  color: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
}

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#8A2BE2',
  textAlign: 'center' as const,
}

const section = {
  padding: '24px',
  backgroundColor: 'rgba(18, 18, 18, 0.5)',
  borderRadius: '12px',
  marginTop: '24px',
}

const text = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '12px 0',
}

const messageText = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '12px 0',
  padding: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '6px',
}

const hr = {
  borderColor: 'rgba(255, 255, 255, 0.2)',
  margin: '20px 0',
}

const footer = {
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.7)',
  textAlign: 'center' as const,
  marginTop: '24px',
}

export default ContactTemplate
