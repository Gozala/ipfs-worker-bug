const worker = new SharedWorker("worker.js")
worker.port.onmessage = (event) => {
  document.body.textContent += `<pre>${JSON.stringify(event.data)}</pre>`
}
