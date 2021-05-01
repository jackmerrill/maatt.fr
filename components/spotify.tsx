import React from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export function SpotifyMiniAlbumWidget ({albumId}:{albumId: string}) {
  const { data } = useSWR(`/api/spotify/album?albumId=${albumId}`, fetcher)
  return (
    <div id={data?.id} className="w-32 h-32 m-2">
      <a href={data?.url}>
        <img
          src={data?.albumArt ?? '/assets/placeholder.png'}
          alt={data?.albumName ?? 'Error fetching data'}
          width={128}
          height={128}
          className="rounded-2xl"
        />
      </a>
    </div>
  )
}
