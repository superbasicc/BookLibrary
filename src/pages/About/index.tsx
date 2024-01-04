'use client'

import { type NextPage } from "next"

const About: NextPage = () => {
    return (
        <>
            <main>
                <section className="container mx-auto px-10 py-8">
                    <h1><strong>About Us</strong></h1>
                    <hr/>
                    <div data-aos="fade-left">
                        <h3 className="text-left my-3 w-2/3">
                            Welcome to BOOK LIBRARY, a heaven for book enthusiasts and knowledge seekers. Our library is not just a collection of books, it's a journey through the vast landscapes of literature and imagination. At BOOK LIBRARY, we believe in the transformative power of words and the magic that unfolds when you open the cover of a book.
                        </h3>
                    </div>
                </section>
                <section className="container mx-auto px-10 py-8 text-right">
                    <h1><strong>Our Mission</strong></h1>
                    <hr/>
                    <div data-aos="fade-right">
                        <h3 className="my-3 ml-20 sm:ml-40 lg:ml-60">
                            Our mission is to inspire a love for reading, cultivate a community of lifelong learners, and provide a space where people can explore the wonders of literature. We are dedicated to curating a diverse collection of books that cater to various interests, ages, and genres.
                        </h3>
                    </div>
                </section>
                <section className="container mx-auto px-10 py-8">
                    <h1><strong>The Reading Experience</strong></h1>
                    <hr/>
                    <div data-aos="fade-left">
                        <h3 className="text-left my-3 w-2/3">
                            Step into our library, and you'll find more than just shelves filled with books. Immerse yourself in a serene atmosphere where the scent of pages mingles with the excitement of new discoveries. Our cozy reading nooks invite you to lose yourself in captivating stories, embark on epic adventures, and delve into the depths of knowledge.
                        </h3>
                    </div>
                </section>
                <section className="container mx-auto px-10 py-8 text-right">
                    <h1><strong>Our Commitment to Accessibility</strong></h1>
                    <hr/>
                    <div data-aos="fade-right">
                        <h3 className="my-3 ml-20 sm:ml-40 lg:ml-60">
                            We believe that access to knowledge should be inclusive. That's why BOOK LIBRARY is committed to providing resources that cater to all members of our community. From classic literature to contemporary bestsellers, we strive to offer a diverse range of titles that reflect the richness of human experiences.
                        </h3>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About