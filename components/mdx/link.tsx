import Link from 'next/link'

const LinkEng = (props) => {
  const href = props.href
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'))

  if(isInternal) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return ( <a {...props} /> )
}

export default LinkEng