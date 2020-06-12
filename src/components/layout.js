import React, { Fragment } from "react"
import Header from "./header"
import { Helmet } from "react-helmet"

const Layout = props => {
    return (
        <Fragment>
            <Helmet>
                <title>Trekking Pirineus</title>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    rel="stylesheet"
                />
            </Helmet>
            <Header />
            {props.children}
        </Fragment>
    )
}
export default Layout
