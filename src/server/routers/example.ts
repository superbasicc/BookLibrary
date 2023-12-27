import { z } from "zod"
import { router, procedure } from "../trpc"

const exampleRouter = router({
    get: procedure
    .input(
        z.object({
            text: z.string()
        })
    )
    .query((opts) => {
        return {
            greeting: `Hello ${opts.input.text}`
        }
    })
})

export default exampleRouter