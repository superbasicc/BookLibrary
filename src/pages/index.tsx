'use client'

import { NextPage } from "next"
import { trpc } from "@/utilities/trpc"
import LoadingCmp from "./_components/loading"

const IndexPage: NextPage = () => {
  const { isLoading, error, data } = trpc.example.get.useQuery({ text: "Brow" })

  if (isLoading) {
    return <LoadingCmp type="page" />
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-2">
          <div className="relative">
              <div data-aos="fade-up">
                <img
                  src="/assets/images/books.jpg"
                  alt="Books"
                  className="brightness-50 w-full h-screen rounded-lg sm:w-2/3 sm:brightness-75 lg:brightness-75 lg:w-2/3"
                />
              </div>
              <div data-aos="fade-in" data-aos-delay="150"   data-aos-duration="1500" className="absolute inset-y-0 text-center mt-10 sm:mt-20 md:mt-20">
                <h1 className="font-bold uppercase text-white text-8xl p-3 rounded-md sm:bg-black/25 sm:text-right sm:float-right md:float-right">Book Library</h1>
                  <div className="text-center text-white mt-20 px-20 sm:text-black sm:px-0 sm:float-right sm:mt-20 sm:pl-10 sm:w-1/3 md:w-1/3 md:mt-20 md:float-right md:text-black lg:mt-40">
                      <p>
                        Without libraries what have we? We have no past nor future
                      </p>
                      <p><i>- Ray Bradbury -</i></p>
                    </div>
              </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage
