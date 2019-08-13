const worker = new SharedWorker("worker.js")
worker.port.onmessage = (event) => {
  document.body.innerHTML += `<pre>${JSON.stringify(event.data)}</pre>`
}
