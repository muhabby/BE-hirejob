const express = require("express");
const workExperienceController = require("../controller/work_experience");
const router = express.Router();
// const {Protect} = require('../middleware/private')
// const upload = require('../middleware/photo')

router.get("/", workExperienceController.showWorkExperience);
router.get("/detail", workExperienceController.searchWorkExperience);
router.get("/:id", workExperienceController.showWorkExperienceById);
router.post("/", workExperienceController.inputWorkExperience);
router.put("/:id", workExperienceController.updateWorkExperience);
router.delete("/:id", workExperienceController.deleteWorkExperience);

module.exports = router;