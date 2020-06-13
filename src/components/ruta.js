import React, { Fragment } from "react"
import Image from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    column: {
        paddingTop: "4rem",
        maxWidth: "1200px",
        width: "95%",
        margin: "0 auto",

        "& p": {
            lineHeight: 2,
        },
    },
})

const Ruta = ({ ruta }) => {
    const { title, description, image } = ruta
    const classes = useStyles()

    return (
        <Fragment>
            <div className={classes.column}>
                <h2>{title[0].text}</h2>
                <p>{description[0].text}</p>
                <img src={image.url} />
            </div>
        </Fragment>
    )
}

export default Ruta
