import {Html, Head, Font,Preview,Row, Section, Heading, Text} from '@react-email/components';

interface VerificationEmailProp{
    fullName : string
    email : string
    description : string
    companyName ?: string
}

export default function VerificationEmail({fullName,email,description,companyName}: VerificationEmailProp){
    return (
        <Html lang='en' dir='ltr'>
           <Head>
            <title>
                <Font fontFamily='Roboto' fallbackFontFamily={'Verdana'} webFont={{
                    url : 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
                    format : 'woff2'
                }} 
                fontWeight={400}
                fontStyle='normal'
                />
            </title>

            </Head> 
            <Preview>
               Message from Skylence&apos;s Client - {fullName}
            </Preview>
            <Section>
                <Row>
                    <Heading as='h2'> {fullName} Messaged </Heading>
                </Row>
                <Row>
                    <Heading as="h3" style={{fontWeight:700}}>
                       Company Name :- {companyName? companyName : "N|A"}
                    </Heading>
                </Row>
                <Row>
                    <Text>
                       His/Her Email :- {email}
                    </Text>
                </Row>
                <Row>
                    <Text>
                       Project Description :- <Text style={{fontWeight:700}}>{description}</Text>
                    </Text>
                </Row>
                <Row>
                    <Text style={{color:"#FF0000", fontWeight:400}}>
                        If you didn&apos;t request this code,please ignore this email.
                    </Text>
                </Row>
            </Section>

        </Html>
    )

}


