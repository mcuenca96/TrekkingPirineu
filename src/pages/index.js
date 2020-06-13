import React from "react"
import { Link } from "gatsby"
import TrekkingImage from "../components/bg-image"
import Rutes from "../components/rutes"

import Layout from "../components/layout"

const IndexPage = () => (
    <Layout>
        <TrekkingImage />
        <Rutes />
    </Layout>
)

export default IndexPage
