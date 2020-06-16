import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Ruta from "./ruta"

import Grid from "@material-ui/core/Grid"

const Rutes = () => {
    const information = useStaticQuery(graphql`
        {
            prismic {
                allRutas {
                    edges {
                        node {
                            title
                            description
                            image
                            link {
                                ... on PRISMIC__ExternalLink {
                                    _linkType
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const rutes = information.prismic.allRutas.edges

    return (
        <Fragment>
            <Grid container>
                {rutes.map(ruta => (
                    <Ruta ruta={ruta.node} />
                ))}
            </Grid>
        </Fragment>
    )
}

export default Rutes
