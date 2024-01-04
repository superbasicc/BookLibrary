'use client'

import { type NextPage } from "next"
import { Accordion } from '@rewind-ui/core'
  
const FAQ: NextPage = () => {

    type FAQObj = {
        q: string
        answer: string
    }

    const faqList: FAQObj[] = [
        {
            q: "How do I borrow a book?",
            answer: "To borrow a book, you can visit our library in person and check out books at the circulation desk. Make sure to bring your library card."
        },
        {
            q: "How long can I keep a borrowed book?",
            answer: "The standard loan period is typically 14 days. You cannot renew a book unless you have returned a previous one."
        },
        {
            q: "Can I reserve a book that is currently checked out?",
            answer: "Yes, you can place a hold on a book that is currently checked out. Once the book is returned, you will be notified, and the book will be held for you."
        },
        {
            q: "What are the library hours?",
            answer: "Our library hours vary. Please check our website or contact us for the most up-to-date information on operating hours."
        },
        {
            q: "How can I donate books to the library?",
            answer: "We welcome book donations. Please visit our library or contact us to discuss the donation process and our criteria for accepting books."
        },
        {
            q: "Can I suggest a book for purchase?",
            answer: "Absolutely! We value your suggestions. You can recommend a book for purchase through our website or by speaking to a librarian."
        },
        {
            q: "Do you have a quiet study area?",
            answer: "Yes, we have designated quiet study areas in the library. Please respect the quiet zone to provide a conducive environment for studying."
        },
    ]


    return (
        <>
            <main className="container mx-auto px-2">
                <div data-aos="fade-up" data-aos-duration="1500">
                <Accordion
                    defaultItem="item-1"
                    bordered={false}
                    radius="base"
                    shadow="base" 
                    shadowColor="slate" 
                    size="xl" 
                    tone="light" 
                    withRing={false}
                >
                    {
                        faqList.map((d, i) => {
                            return (
                                <Accordion.Item
                                    anchor={`item-${i + 1}`}
                                >
                                    <Accordion.Header className="text-left">
                                        {d.q}
                                    </Accordion.Header>
                                    <Accordion.Body className="p-10">
                                       <p className="text-base text-left"><i>{d.answer}</i></p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
                </div>
            </main>
        </>
    )
}

export default FAQ