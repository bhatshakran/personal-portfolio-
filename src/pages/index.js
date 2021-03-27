import "./styles/index.scss"

import HeroBanner from "../components/HeroBanner"
import Layout from "../components/Layout"
import React from "react"

const IndexPage = () => (
  <div className="index-container">
    <Layout />
    <HeroBanner />
  </div>
)

export default IndexPage
