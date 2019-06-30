import searchRouters from "./hello/router"
import uploadRouter from "./upload/routing"
import userRouter from "./user"

export default [...searchRouters, ...uploadRouter, ...userRouter];