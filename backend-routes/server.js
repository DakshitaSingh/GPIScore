const express = require("express");
const cors = require("cors");
const groupBuyRoutes = require("./routes/groupbuy-routes");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:5173", // Adjust if frontend runs on a different port
  credentials: true
}));
app.use(express.json());

app.use("/api/groupbuy", groupBuyRoutes); // ✅ Mount your groupbuy routes here

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});