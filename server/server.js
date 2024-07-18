const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ user: ["user", "user23", "user3"] });
});
app.post("/", async (req, res) => {
  try {
    const response = await axios.post(
      "https://webhook.site/5752c62e-e518-47a9-a79b-3fa24100620e",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(5000, () => console.log("Proxy server listening on port 5000"));
