export const getWorksQuery = `
query {
  works {
    title
    description
    frontend
    backend
    others
    url
    image {
      url
    }
  }
}
`
