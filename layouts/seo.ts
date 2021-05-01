export default {
  canonical: "https://doamatto.xyz",
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://doamatto.xyz',
    description: 'Hello and bienvenue! My name\'s Matt and this is my website.',
    site_name: 'Matt Ronchetto - Web Developer, Student'
  },
  twitter: {
    handle: '@doamatto',
    site: '@doamatto',
    cardType: 'summary_large_image'
  }
}

export function Post(frontMatter, type){
  var layout = {
    title: `${frontMatter.title} - doamatto`,
    description: frontMatter.description,
    canonical: "https://www.doamatto.xyz",
    openGraph: {
      type: 'article',
      title: `${frontMatter.title} - doamatto`,
      description: frontMatter.description
    }
  }
  switch(type) {
    default: 
      layout.canonical = "https://www.doamatto.xyz"
      break
    case 'post':
      layout.canonical = `https://www.doamatto.xyz/posts/${frontMatter.title}`
      break
    case 'project':
      layout.canonical = `https://www.doamatto.xyz/projects/${frontMatter.title}`
      break
  }
  return layout
}