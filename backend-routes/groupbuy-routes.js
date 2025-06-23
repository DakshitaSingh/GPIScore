const express = require("express");
const router = express.Router();

let groups = [];
let groupIdCounter = 1;

// ✅ Create a group (3-day expiry fixed)
router.post("/create", (req, res) => {
  const { productId, maxBuyers } = req.body;
  const endTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days

  const newGroup = {
    _id: groupIdCounter++,
    productId,
    buyers: [],
    maxBuyers,
    endTime
  };

  groups.push(newGroup);
  console.log("✅ Group created:", newGroup);
  res.status(201).json(newGroup);
});

// ✅ Join a group
router.post("/join/:groupId", (req, res) => {
  const { groupId } = req.params;
  const { userId } = req.body;

  const group = groups.find(g => g._id == groupId);
  if (!group) return res.status(404).json({ message: "Group not found" });

  if (group.buyers.includes(userId))
    return res.status(400).json({ message: "Already joined" });

  if (group.buyers.length >= group.maxBuyers)
    return res.status(400).json({ message: "Group is full" });

  group.buyers.push(userId);
  res.json({ message: "Joined group", group });
});

// ✅ Get group by product ID
router.get("/:productId", (req, res) => {
  const { productId } = req.params;
  const group = groups.find(g => g.productId == productId);
  if (!group) return res.status(404).json({ message: "No group found" });
  res.json(group);
});

// ✅ Get all active groups
router.get("/active", (req, res) => {
  const now = new Date();
  const activeDeals = groups.filter(deal =>
    new Date(deal.endTime) > now && deal.buyers.length < deal.maxBuyers
  );
  res.json(activeDeals);
});

module.exports = router;