import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'

import dynamic from 'next/dynamic'
import { getSortedPostsData } from '@/lib/feedData'
const Header = dynamic(() => import('@/components/header'))

export default function IndexPage ({ postData }:{
  postData: {
    title: string
    slug: string
    id: string,
    tag: string,
    description: string,
    class: string
  }[]
}) {
  return (
    <>
    <NextSeo
      title="Blog - doamatto"
      description = "I write blog posts about a lot of different stuff. Some are funny, others are serious, and some are just plain weird."
    />
    <div>
      <Header title="Blog" />
      <div className="grid grid-cols-1 justify-evenly sm:grid-cols-2 lg:grid-cols-3 posts">
        {postData.map((frontmatter) => (
          <section className="border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 rounded py-3 px-4 m-2 transition-colors post focus:bg-bg-gray-100 focus-within:bg-gray-100 dark:focus:bg-gray-900 dark:focus-within:bg-gray-900 post" key={frontmatter.id} id={frontmatter.id}>
            <Link href={`/blog/${frontmatter.slug}`}>
              <a className="text-xl font-bold transition-colors focus:outline-none focus-within:outline-none">
                {frontmatter.title}
                <p className="text-sm font-normal">{frontmatter.description}</p>
                <p className={frontmatter.class + " rounded table text-xs px-2 py-1.5 mt-2 text-black"}>{frontmatter.tag}</p>
              </a>
            </Link>
          </section>
        ))}
      </div>
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postData = getSortedPostsData('blog')
  return {
    props: {
      postData
    }
  }
}
