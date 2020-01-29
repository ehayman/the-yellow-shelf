import React from "react"
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const BookPageTemplate = ({ title }) => {  
    return (
      <section className="section section--gradient">
        <h1>{title}</h1>
      </section>
    )
}

BookPageTemplate.propTypes = {
    title: PropTypes.string.isRequired
}

const BookPage = ({ data }) => {
    const { markdownRemark: post } = data
  
    return (
      <Layout>
        <AboutPageTemplate
          title={post.frontmatter.title}
        />
      </Layout>
    )
}

BookPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    })
}

export default BookPage

export const bookPageQuery = graphql`
  query BookPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`