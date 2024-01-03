import { type NextPage } from "next"

type Props = {
    year: number
    author: string
}

const Footer: NextPage<Props> = (props) => {
    return (
        <>
            <div className="text-center container mx-auto mt-3">
                <hr/>
                <footer className="my-3">
                    Book Library Website by {props.author} &copy; {props.year}
                </footer>
            </div>            
        </>
    )
}

export default Footer