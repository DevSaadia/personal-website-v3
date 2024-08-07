import Link from 'next/link'
import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid'

interface ProjectCardProps {
    title: string,
    description: string,
    image: string,
    github: string,
    url: string,
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, github, url }) => {
    return (
        <div>
            <div
                className="h-44 w-96 rounded-t-xl relative group  "
                style={{
                    background: `url(${image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover: rounded-t-xl transition-all duration-500">
                    <Link
                        href={github}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7B3] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7B3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"></CodeBracketIcon>
                    </Link>
                    <Link
                        href={url}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7B3] hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7B3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"></EyeIcon>
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-1 bg-[#e54971] py-6 px-4 mb-4 w-96 h-36">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#f8e8be]">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard