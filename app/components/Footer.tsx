import { jetBrainsMono } from '../styles/fonts'


const Footer = () => {
    return (
        <footer
            className={`
                flex 
                items-center 
                justify-center
                py-2
                font-semibold
                text-[#e54971] 
                ${jetBrainsMono.className}
                `}
        >
            Made with ❤ by Saadia Shahid © 2024
        </footer >
    )
}

export default Footer