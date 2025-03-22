import express from "express";
import {
  getHome,
  getSignup,
  postSignup,
  getSignups,
} from "../controllers/subscriberController.js";

const router = express.Router();

router.get("/", getHome);

router.get("/signup", getSignup);

router.post("/signup", postSignup);

router.get("/signups", getSignups);

export default router;
