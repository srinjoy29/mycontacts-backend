const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact
} = require("../controllers/contactControllers");

const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

// Handle GET and POST requests for "/"
router.route("/")
  .get(getContacts)
  .post(createContact);

// Handle GET, PUT, and DELETE requests for "/:id"
router.route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
