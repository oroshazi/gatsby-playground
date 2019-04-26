import React from "react";
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const TestPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      {/* <h2 style={{ backroundColor: "red" }}>{title}</h2> */}
      <div className="my-thing "> <h1>
        {title}
      </h1></div>
      <PageContent className="content" content={content} />
    </div>
  );
};

const TestPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TestPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default TestPage;


export const x = graphql`
  query TestPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`