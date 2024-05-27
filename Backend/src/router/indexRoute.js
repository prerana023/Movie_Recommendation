import { Router } from "express";
import { ThirdPartyRoutes } from "./ThirdPartyRoute.js";
import { Movies } from "./MovieRoute.js";

const router = Router();

router.use("/thirdparty", ThirdPartyRoutes)
router.use("/movies", Movies)

export default router;