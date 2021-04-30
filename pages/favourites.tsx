import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import Button from '@/components/button'
const Header = dynamic(() => import('@/components/header'))

export default function Favourites () {
  return (
        <>
            <Head>
                <title>Favourites - doamatto</title>
            </Head>
            <NextSeo
                title="Favourites - doamatto"
                description="My favourite songs that I can't get enough of."
            />
            <Header title="Favourites" />
            <div id="content">
              <p>I mostly am scattered amongst my playlists, so you can see all the ones I've made public <a href="https://open.spotify.com/user/rr0fpmxz77lzn7vktz1fzg4ai">here</a>.</p>
              <div className="w-full text-center justify-center">
                <Button
                  url="https://open.spotify.com/playlist/1TgcMEtUJs4zjnRoc5ug4i?si=u35un3OETHefGgkM0s_xlw"
                  title="Open as a playlist in Spotify"
                />
              </div>
            </div>
        </>
  )
}
