import { httpBatchLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
import type { AppRouter } from "@/server/routers/_app"

const {
    APP_PORT,

    APP_BASE_URL
} = process.env

function getBaseUrl () {
    if (typeof window !== "undefined") {
        return ''
    }

    if (APP_BASE_URL) {
        return APP_BASE_URL
    }

    return `http://localhost:${APP_PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
    config (opts) {
        return {
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                    async headers () {
                        return {
                            //
                        }
                    }
                })
            ]
        }
    },
    ssr: false
})