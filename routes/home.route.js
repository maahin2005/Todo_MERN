const homeRoutes = require("express").Router();

const studentsData = [
  { name: "John Doe", grade: "A" },
  { name: "Jane Smith", grade: "B" },
  { name: "Alice Johnson", grade: "A+" },
  { name: "Bob Lee", grade: "C" },
  { name: "Charlie Brown", grade: "B+" },
];

homeRoutes.get("/", (req, res) => {
  res.render("report", { student: studentsData });
});

// module.exports = homeRoutes;
