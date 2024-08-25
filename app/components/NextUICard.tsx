'use client'

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Divider } from '@chakra-ui/react';
import { Button } from "@nextui-org/button";
import { spaceMono, averageSans, jetBrainsMono } from '../styles/fonts'



interface NextUICardProps {
    title: string,
    description: string,
    image: string,
    github: string,
    url: string,
    technologies: string[]
}
const NextUICard: React.FC<NextUICardProps> = ({ title, description, image, github, url, technologies }) => {
    return (
        <>
            <Card className={`py-4 size-[330px] mb-6 mx-4 ${averageSans.className}`}>
                <CardBody className="overflow-visible py-2 flex items-center">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src={image}
                        height='200px'
                        width='100%'
                    />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className={`font-bold text-lg mb-2 ${jetBrainsMono.className}`}>{title}</h4>
                    {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
                    <p className="text-default-500 w-full">{description}</p>
                    <div className='flex flex-row flex-wrap gap-2 pb-4 mt-2'>
                        {technologies.map((technology, index) => (
                            <Chip
                                key={index}
                                size='sm'
                                variant='bordered'
                                className='bg-white items-center flex justify-center text-[#e54971] uppercase  border-[#e54971]'
                            >
                                {technology}
                            </Chip>
                        ))}
                    </div>
                    <Divider />
                    <div id='buttons-container' className='flex flex-col md:flex-row pt-2 gap-4  w-full'>

                        <Button
                            radius='full'
                            className='text-white bg-[#e54971] '
                            onClick={() => window.open(url, "_blank")}
                        >
                            Visit
                        </Button>

                        <Button
                            variant='bordered'
                            radius='full'
                            className=' border-[#e54971] text-[#e54971] border-2 '
                            onClick={() => window.open(github, "_blank")}
                        >
                            Github
                        </Button>


                    </div>

                </CardHeader>
            </Card>
        </>
    )
}

export default NextUICard