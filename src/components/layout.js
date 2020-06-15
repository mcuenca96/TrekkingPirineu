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
                <link
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                ></link>
            </Helmet>
            <Header />
            {props.children}
        </Fragment>
    )
}
export default Layout
