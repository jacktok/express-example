import searchRouters from "./hello"
import uploadRouter from "./tmpfile"
import userRouter from "./user"

export default [...searchRouters, ...uploadRouter, ...userRouter];
