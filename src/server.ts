import {serverHttp} from "./http";
import "./websockets";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PRODUCTION || process.env.LOCAL_HOST;

serverHttp.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));