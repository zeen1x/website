import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Portfolio />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
