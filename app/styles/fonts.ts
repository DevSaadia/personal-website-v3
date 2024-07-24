import { Space_Mono } from '@next/font/google';
import { Average_Sans } from '@next/font/google';
const spaceMono = Space_Mono({
    subsets: ['latin'],
    variable: '--space-mono-font',
    weight: ['400', '700']
});

const averageSans = Average_Sans({
    subsets: ['latin'],
    variable: '--average-sans-font',
    weight: ['400']
});


export { spaceMono, averageSans };