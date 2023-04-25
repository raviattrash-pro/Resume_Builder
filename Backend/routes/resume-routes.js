const express = require('express');
const router = express.Router();
const resume_control = require('../controller/resume-controller')
    //const resumeDataFromModel = require("../model/Resume");
router.get("/", resume_control.getAllresumeDetails);
router.post("/", resume_control.addResumeDetails);
router.get("/:id", resume_control.getById);
router.put("/:id", resume_control.update);
router.delete("/:id", resume_control.delete_details);
module.exports = router;