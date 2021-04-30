import Link from 'next/link'

export default function Button({url, title}:{url:string,title:string}) {
    return (
        <Link href={url}>
            <a
                className="hover:text-lightPurple text-center inline-block my-4 border-none rounded-md bg-lightAlt dark:bg-darkAlt no-underline py-4 px-6 transition-colors"
                title={title}
            >{title}</a>
        </Link>
    )
}