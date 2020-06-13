import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    image: {
        height: "500px",
    },
})

const TrekkingImage = () => {
    const classes = useStyles()
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "senderismo.jpg" }) {
                sharp: childImageSharp {
                    fluid(maxWidth: 3080, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <BackgroundImage
            className={classes.image}
            tag="section"
            fluid={image.sharp.fluid}
        ></BackgroundImage>
    )
}

export default TrekkingImage
