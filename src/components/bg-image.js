import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    image: {
        height: "400px",
    },
    title: {
        fontSize: "4rem",
        margin: "0%",
    },

    div: {
        color: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        >
            <div className={classes.div}>
                <h1 className={classes.title}>Les nostres rutes</h1>
            </div>
        </BackgroundImage>
    )
}

export default TrekkingImage
