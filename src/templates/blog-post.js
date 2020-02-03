import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  secondaryBody,
  featuredimage,
  books,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const booksArr = books ? Array.from(books) : [];

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <img src={featuredimage} alt="featured img"></img>
            <h3>a small note</h3>
            <PostContent content={content} />
            {booksArr && booksArr.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h2>Read</h2>
                <h3>on our shelf this week</h3>
                <ul className="taglist">
                  {booksArr.map(book => (
                    <li key={book.title}>
                      <img src={book.coverimage.childImageSharp.fluid.src} style={{maxWidth: '450px'}}></img>
                      <p><strong>{book.title}</strong></p>
                      <div dangerouslySetInnerHTML={{ __html: book.description }} />
                      <p>{book.genres}</p>
                      <p>{book.goodreads} / 5</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <PostContent content={secondaryBody} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage ? post.frontmatter.featuredimage.childImageSharp.fluid.src : ''}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        secondaryBody={post.frontmatter.secondaryBody}
        tags={post.frontmatter.tags}
        books={post.frontmatter.books}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        secondaryBody
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        books {
          title
          bookauthor
          publishyear
          coverimage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          genres
          aalink
          goodreads
        }
      }
    }
  }
`
