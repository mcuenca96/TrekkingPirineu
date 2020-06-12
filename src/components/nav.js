import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    nav: {
        justifyContent: "center",
        paddingBottom: 3,
        display: "flex",
    },

    link: {
        color: "#ffffff",
        fontSize: "1.6 rem",
        fontWeight: 700,
        lineHeight: "1rem",
        textDecoration: "none",
        padding: "1rem",
        marginRight: "1rem",

        "&.actual": {
            borderBottom: "2px solid #fff",
        },
    },
})

const Nav = () => {
    const classes = useStyles()
    return (
        <nav className={classes.nav}>
            <Link to={"/"} className={classes.link} activeClassName="actual">
                Inici
            </Link>
            <Link
                to={"/contacte"}
                className={classes.link}
                activeClassName="actual"
            >
                Contacte
            </Link>
        </nav>
    )
}

export default Nav
