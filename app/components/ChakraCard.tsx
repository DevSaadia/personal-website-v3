import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider, Heading, Stack } from '@chakra-ui/react'
import { Image, Text, Badge } from '@chakra-ui/react'
import { wrap } from 'module';

interface ChakraCardProps {
    title: string,
    description: string,
    image: string,
    github: string,
    url: string,
    technologies: string[]
}

const ChakraCard: React.FC<ChakraCardProps> = ({ title, description, image, github, url, technologies }) => {
    return (
        <Card
            maxW='sm'
        >
            <CardBody>
                <Image
                    src={image}
                    alt='Project Image'
                    borderRadius='lg'
                    objectFit='cover'
                    width='100%'
                    height='200px'
                />
                <Stack
                    mt='6'
                    spacing='3'
                >
                    <Heading
                        size='md'
                    >
                        {title}
                    </Heading>
                    <Text>
                        {description}
                    </Text>
                    {/*  add badges for technologies used */}
                    <Stack
                        direction='row'
                        spacing='2'
                        wrap='wrap'
                    >
                        {technologies.map((technology, index) => (
                            <Badge
                                key={index}
                                variant='solid'
                                borderWidth='1px'
                                borderColor='#e54971'
                                bg='white'
                                color='#e54971'
                                borderRadius='full'
                                py={1}
                                px={2}
                                fontSize={10}
                            >
                                {technology}
                            </Badge>
                        ))}
                    </Stack>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button
                        as='a'
                        target='_blank'
                        href={url}
                        rel='noopener noreferrer'
                        variant='solid'
                        color='white'
                        borderRadius='full'
                        bg='#e54971'
                        _hover={{ bg: '#b23554' }}
                    >
                        Link
                    </Button>
                    <Button
                        as='a'
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                        variant='outline'
                        borderColor='#e54971'
                        color='#e54971'
                        borderWidth={2}
                        borderRadius='full'
                        _hover={{ bg: '#e54971', color: 'white' }}
                    >
                        Github
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ChakraCard