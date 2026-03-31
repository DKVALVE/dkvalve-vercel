export default function handler(req, res) {
  if (req.method === "POST") {
    const from = req.body.From;
    const body = req.body.Body;

    console.log("Message from:", from);
    console.log("Message:", body);

    return res.status(200).send("OK");
  }

  return res.status(200).send("Webhook running");
}