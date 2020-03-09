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
  headline,
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
    <section>
      {helmet || ''}
            <div className="post-header">
              <div className="post-header-content">
            <p className="post-header-type">From The Editor</p>
            <h1 className="post-header-title">{title}</h1>
            <p className="post-header-desc">{description}</p>
            </div>
            </div>
            <div className="post-content">
            <h3 className="post-headline" dangerouslySetInnerHTML={{ __html: headline }} />
            <div className="post-note">
            <div className="post-note-img" style={{backgroundImage: 'url(' + featuredimage + ')'}}>
            </div>
            <PostContent className="post-note-copy copy" content={content} />
            </div>
            {booksArr && booksArr.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h2>Read</h2>
                <h3>on our shelf this week</h3>
                <ul className="post-book-wrapper">
                  {booksArr.map(book => (
                    <li key={book.title} className="post-book">
                      <div className="post-book-img">
                      <img src={book.coverimage.childImageSharp.fluid.src}></img>
                      </div>
               <div className="post-book-content">
        
                      <div className="post-book-content-header">
                      <h4 className="post-book-content-title">{book.title}</h4>
                      <div className="post-book-content-rating">
                      <div className="post-book-content-rating-stars">
                      <svg viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                      <svg viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                      <svg viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                      <svg viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                      <svg viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                      </div>
                      {Number(book.goodreads).toFixed(1)}
                      </div>
                      </div>
                      <p className="post-book-content-author">By <span className="post-book-content-author-name">{book.bookauthor}</span></p>
                      <p className="post-book-content-metadata"><span>{book.publishyear}</span><span>120 pages</span></p>
                      <div className="post-book-content-review" dangerouslySetInnerHTML={{ __html: book.description }} />
                      <div className="post-book-content-quote">
                        <div className="post-book-content-quote-icons">
                        <svg viewBox="0 0 75 100">
                        <path d="M 12.921008,94.843479 L 12.921008,87.452854 C 24.454832,83.645516 33.385161,77.738621 39.712023,69.732151 C 46.038795,61.725616 49.202203,53.243203 49.202258,44.284885 C 49.202203,42.157277 48.698297,40.365612 47.690539,38.909885 C 46.906632,37.902073 46.122779,37.398167 45.338976,37.398167 C 44.107156,37.398167 41.419659,38.517957 37.276476,40.757542 C 35.260811,41.76535 33.133209,42.269256 30.893664,42.26926 C 25.406654,42.269256 21.039471,40.645559 17.792101,37.398167 C 14.544685,34.150774 12.920989,29.671612 12.921008,23.960667 C 12.920989,18.473707 15.020596,13.770586 19.219836,9.8512917 C 23.419026,5.9320525 28.542067,3.972419 34.588976,3.9723854 C 41.979554,3.972419 48.558323,7.1918168 54.325305,13.630589 C 60.092166,20.069408 62.975627,28.607811 62.975695,39.245823 C 62.975627,50.779664 58.972375,61.501658 50.96593,71.411839 C 42.959371,81.321951 30.277743,89.13249 12.921008,94.843479 L 12.921008,94.843479 z " id="text2161"/>
                        </svg>
                        <svg viewBox="0 0 75 100">
                        <path d="M 12.921008,94.843479 L 12.921008,87.452854 C 24.454832,83.645516 33.385161,77.738621 39.712023,69.732151 C 46.038795,61.725616 49.202203,53.243203 49.202258,44.284885 C 49.202203,42.157277 48.698297,40.365612 47.690539,38.909885 C 46.906632,37.902073 46.122779,37.398167 45.338976,37.398167 C 44.107156,37.398167 41.419659,38.517957 37.276476,40.757542 C 35.260811,41.76535 33.133209,42.269256 30.893664,42.26926 C 25.406654,42.269256 21.039471,40.645559 17.792101,37.398167 C 14.544685,34.150774 12.920989,29.671612 12.921008,23.960667 C 12.920989,18.473707 15.020596,13.770586 19.219836,9.8512917 C 23.419026,5.9320525 28.542067,3.972419 34.588976,3.9723854 C 41.979554,3.972419 48.558323,7.1918168 54.325305,13.630589 C 60.092166,20.069408 62.975627,28.607811 62.975695,39.245823 C 62.975627,50.779664 58.972375,61.501658 50.96593,71.411839 C 42.959371,81.321951 30.277743,89.13249 12.921008,94.843479 L 12.921008,94.843479 z " id="text2161"/>
                        </svg>
                        </div>
                        <p className="post-book-content-quote-text">{book.quote}</p></div>
                      <ul className="post-book-content-genres">
                  {book.genres.map(genre => (
                    <li key={genre + `genre`}>
                      {genre.split(">")[1] || genre}
                    </li>
                  ))}
                </ul>
                      </div>
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
        headline={post.frontmatter.headline}
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
        headline
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
          quote
        }
      }
    }
  }
`
