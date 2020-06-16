import React, { useState } from "react"
import Layout from "../components/layout"
import Grid from "@material-ui/core/Grid"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { makeStyles } from "@material-ui/core/styles"
import Swal from "sweetalert2"
import { navigate } from "@reach/router"

const useStyles = makeStyles(theme => ({
    img: {
        position: "fixed !important",
        top: "0",
        left: "0",
        height: "auto",
        minHeight: "100%",
        width: "100%",
    },
}))

const Contacte = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "contact-image.jpg" }) {
                sharp: childImageSharp {
                    fluid(maxWidth: 3080, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const classes = useStyles()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)

    const submitForm = e => {
        if (
            name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
        ) {
            setError(true)
            return
        }

        setError(false)
        Swal.fire(
            "Formulari enviat!",
            "Moltes gràcies pel teu missatge!",
            "success"
        )
        navigate("/")
    }

    return (
        <BackgroundImage
            tag="section"
            fluid={image.sharp.fluid}
            className={classes.img}
        >
            <Layout>
                <Grid justify="center" container spacing={3}>
                    <Grid item xs={4} className="mt-4">
                        <h2 className="text-center">CONTACTE</h2>
                        {error ? (
                            <p className="alert alert-danger text-center text-uppercase p3">
                                Tots els camps són obligatoris
                            </p>
                        ) : null}
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={submitForm}
                        >
                            <div className="form-group">
                                <label className="font-weight-bold">
                                    Nom:{" "}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />

                                <label className="font-weight-bold">
                                    Email:{" "}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />

                                <label className="font-weight-bold">
                                    Missatge:{" "}
                                </label>
                                <textarea
                                    name="message"
                                    className="md-textarea form-control"
                                    rows="5"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                ></textarea>

                                <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold mt-4 text-uppercase d-block w-100"
                                >
                                    Envia
                                </button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Layout>
        </BackgroundImage>
    )
}

export default Contacte
