import * as React from "react"
import "./styles/index.scss"
import Layout from "../components/Layout"
import HeroBanner from "../components/HeroBanner"

const IndexPage = () => (
  <div className="index-container">
    <Layout />
    <HeroBanner />
  </div>
)

export default IndexPage
