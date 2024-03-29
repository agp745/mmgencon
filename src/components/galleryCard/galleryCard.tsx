interface GalleryCardProps {
    src: string
    alt?: string
    title: string
    description?: string
    location?: string
}

const imageContainerStyles = 'sm:w-1/2 w-2/3 overflow-hidden bg-no-repeat bg-cover'

export function GalleryCardLeft({src, alt, title, description, location}: GalleryCardProps) {
    
    return (
        <section className="flex">
            <div className={`${imageContainerStyles} bg-[url(/assets/mmgencon-pics/resized-20px-${src.slice(0, src.indexOf('.'))}.jpg)]`}>
                <img
                    src={src}
                    alt={alt ? alt : 'gallery photo'}
                    className=""
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col items-start sm:w-1/2 w-1/3 bg-sky-700/10 sm:pl-10 pl-2 font-light pt-3 text-left">
                <h1 className="uppercase tracking-wider sm:text-3xl text-lg">{title}</h1>
                <h2 className="sm:text-xl text-lg font-extralight tracking-wider">{location ? location : ''}</h2>
                <p className="sm:text-lg text-base mt-2">{description ? description : ''}</p>
            </div>
        </section>
    )
}

export function GalleryCardRight({src, alt, title, description, location}: GalleryCardProps) {

    return (
        <section className="flex">
            <div className="flex flex-col items-end sm:gap-0 gap-2 sm:w-1/2 w-1/3 bg-slate-700/10 sm:pr-10 pr-2 font-light pt-3 text-right">
                <h1 className="uppercase tracking-wider sm:text-3xl text-lg">{title}</h1>
                <h2 className="sm:text-xl text-lg font-extralight tracking-wider">{location ? location : ''}</h2>
                <p className="sm:text-lg text-base mt-2">{description ? description : ''}</p>
            </div>
            <div className={`${imageContainerStyles} bg-[url(/assets/mmgencon-pics/resized-20px-${src.slice(0, src.indexOf('.'))}.jpg)]`} >
                <img
                    src={src}
                    alt={alt ? alt : 'gallery photo'}
                    className="opacity-0"
                    loading="lazy"
                />
            </div>
        </section>
    )
}