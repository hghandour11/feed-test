import posts from './posts.json'

const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts)
    }, 500)
  })
}

export default fetchPosts
