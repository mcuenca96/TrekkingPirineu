import React, { Fragment, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"

import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"

const useStyles = makeStyles(theme => ({
    containerimg: {
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
    },

    img: {
        height: "100%",
        width: "100%",
        cursor: "pointer",
        transition: "all .5s",

        "&:hover": {
            transform: "scale(1.2)",
        },
    },
    root: {
        maxWidth: 750,
    },
    media: {
        height: 200,
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

    centered: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        fontSize: "24px",
    },
}))

const Ruta = ({ ruta }) => {
    const { title, description, image, link } = ruta
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Fragment>
            <Grid item xs={12} sm={6} className={classes.containerimg}>
                <img
                    src={image.url}
                    onClick={handleOpen}
                    className={classes.img}
                    alt={title[0].text}
                />
                <div className={classes.centered}>{title[0].text}</div>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={image.url}
                                title={title[0].text}
                            ></CardMedia>
                            <CardContent>
                                <h2>{title[0].text}</h2>
                                <p>{description[0].text}</p>
                                <a href={link.url} target="_blank">
                                    {link.url}
                                </a>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Fade>
            </Modal>
        </Fragment>
    )
}

export default Ruta
