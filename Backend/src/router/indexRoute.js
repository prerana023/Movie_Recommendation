import { Router } from "express";
import { ThirdPartyRoutes } from "./thirdPartyRoute.js";

const router = Router();

router.use("/thirdparty", ThirdPartyRoutes)
export default router;