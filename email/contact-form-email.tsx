import {
  Body,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>📩 New message from your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black font-sans">
          <Section className="bg-white border border-gray-300 my-10 mx-auto max-w-lg rounded-lg p-6 shadow-md">
            <Heading className="text-xl font-semibold text-gray-900">
              ✉️ New Contact Form Message
            </Heading>
            <Text className="text-gray-700 mt-4">{message}</Text>
            <Hr className="my-4 border-gray-300" />
            <Text className="text-gray-600">
              <strong>Sender:</strong>{' '}
              <a
                href={`mailto:${senderEmail}`}
                className="text-blue-600 underline"
              >
                {senderEmail}
              </a>
            </Text>
            <Text className="text-sm text-gray-500 mt-4">
              📬 Feel free to respond directly to this email.
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
