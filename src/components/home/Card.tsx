import { HomeIcon } from '@heroicons/react/24/outline'

interface CardProps {
    mainText: string,
    subText: string,
    link: string | undefined
    // Icon: React.ElementType | undefined
}

export function Card({ mainText, subText, link }: CardProps) {

    const triangleSize = '20px'

    return (
        <a
            href={link}
            className="flex flex-col drop-shadow-2xl w-2/3 relative">
            <div className="relative bg-mmgreen text-white text-3xl p-5 rounded-t-md">
                <div>{mainText}</div>
                <div className={`absolute -bottom-3 w-0 h-0 border-l-[${triangleSize}] border-l-transparent border-r-[${triangleSize}] border-r-transparent border-t-[${triangleSize}] border-mmgreen`}></div>
            </div>
            <div className="bg-white text-xl text-neutral-800 p-5 rounded-b-md">
                {subText}
            </div>
            <div className='absolute sm:-left-16 -left-14'>
                {/* <Icon /> */}
                <HomeIcon className='w-10 h-10 text-neutral-600' />
            </div>
        </a>
    )
}
