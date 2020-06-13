import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Ruta from "./ruta"

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
                        }
                    }
                }
            }
        }
    `)

    const rutes = information.prismic.allRutas.edges
    console.log(rutes)

    return (
        <Fragment>
            <div>
                {rutes.map(ruta => (
                    <Ruta ruta={ruta.node} />
                ))}
            </div>
        </Fragment>
    )
}

export default Rutes
