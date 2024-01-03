import React from "react"
import { type NextPage } from "next"
import NextHead from "next/head"
import Header from "./_components/header/publicHeader"
import Footer from "./_components/footer/publicFooter"

const Layout: NextPage<{children: React.ReactNode}> = ({ children }) => {
    const dateObj = new Date
    return (
        <>
            <NextHead>
                <title>Book Library</title>
            </NextHead>
            <Header />
            {children}
            <Footer 
                year={dateObj.getFullYear()}
                author={"Suka Wirawan"}
            />
        </>
    )
}

export default Layout