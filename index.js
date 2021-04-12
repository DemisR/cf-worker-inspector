addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(e) {

  let empty = '';
  for (const element of e.headers) {
    empty = empty.concat(element[0], " => ", element[1], "\n")
  }

  var host = e.headers.get("host")
  return new Response(empty, {
    status: 200
  })
}

// // Proxy request to another URL
// addEventListener("fetch", event => {
//   return event.respondWith(
//     fetch("https://httpbin.org/ip")
//   )
// })