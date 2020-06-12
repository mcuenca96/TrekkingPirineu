import React from "react"
import Nav from "./nav"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    header: {
        backgroundColor: "#333",
        padding: 1,
    },
    div: {
        margin: "0 auto",
        maxWidth: 1200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: "white",
        textAlign: "center",
        lineHeight: 1.5,
    },
})

const Header = () => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <div className={classes.div}>
                <h1 className={classes.title}>Trekking Pirineus</h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header
