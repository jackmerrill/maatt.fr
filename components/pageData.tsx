import { parseISO, format } from 'date-fns'

export default function pageData ({ children, frontMatter }: {children: any, frontMatter: any}) {
  const title = frontMatter.title
  const date = frontMatter.date
  return (
      <>
        <div className="antialised prose prose-sm sm:prose lg:prose-lg mx-auto dark:prose-dark">
          <h1 className="text-4xl">{title}</h1>
          <p className="text-sm m-0 font-normal leading-5">{frontMatter.readingTime.text}{' • '}{format(parseISO(date), 'MMMM dd, yyyy')}</p>
          <section>
            {children}
          </section>
        </div>
      </>
  )
}
