import React from 'react'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import Button from '@/components/button'
const Header = dynamic(() => import('@/components/header'))

export default function Sitemap () {
  return (
    <>
    <NextSeo
      title="Sitemap - doamatto"
      description = "A slew of pages that are available on the site."
    />
    <div id="content">
      <Header title="Sitemap" />
        <p>So far, there is only an XML version of the sitemap.An HTML version is coming soon™.</p>
        <div className="w-full text-center justify-center">
          <Button
            url="/sitemap.xml"
            title="Go to XML sitemap"
          />
        </div>
    </div>
    </>
  )
}
