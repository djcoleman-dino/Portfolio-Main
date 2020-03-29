const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const workTemplate = path.resolve("./src/templates/work.js")
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      project: allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
      blog: allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.project.edges.forEach(edge => {
    createPage({
      component: workTemplate,
      path: `/work/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.blog.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
