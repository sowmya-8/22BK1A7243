export function Log(stack, level, packageName, message) {
  fetch("http://20.244.56.144/evaluation-service/logs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      stack,
      level,
      package: packageName,
      message
    })
  })
  .then(res => console.log("Log sent:", res.status))
  .catch(err => console.error("Log failed:", err));
}
