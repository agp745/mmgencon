
interface CardProps {
    mainText: string | React.ReactNode,
    subText: string | React.ReactNode,
    link?: string | undefined
    Icon?: React.ReactNode
}

export function Card({ mainText, subText, link, Icon }: CardProps) {

    const triangleSize = '20px'

    return (
        <a
            href={link}
            target='_blank'
            className="flex flex-col drop-shadow-2xl w-2/3 relative">
            <div className="relative bg-blue-500/50 text-white text-3xl p-5 rounded-t-md">
                <div>{mainText}</div>
                <div className={`absolute -bottom-3 w-0 h-0 border-l-[${triangleSize}] border-l-transparent border-r-[${triangleSize}] border-r-transparent border-t-[${triangleSize}] border-mmgreen`}></div>
            </div>
            <div className="bg-white text-xl text-neutral-800 p-5 rounded-b-md">
                {subText}
            </div>
           {Icon && 
                <div className='absolute sm:-left-16 -left-14'>
                    {Icon}
                </div>
            }
        </a>
    )
}
