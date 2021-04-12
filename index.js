addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {

  // const clientIP = request.headers.get("CF-Connecting-IP")

  // let response = '';
  // for (const element of request.headers) {
  //   response = response.concat(element[0], " => ", element[1], "\n")
  // }

  const data = {
    source_ip: request.headers.get("CF-Connecting-IP"),
    country: request.headers.get("cf-ipcountry")
  }

  const json = JSON.stringify(data, null, 2)

  return new Response(json, {
    headers: {
      "content-type": "application/json;charset=UTF-8"
    }
  })
}

// // Proxy request to another URL
// addEventListener("fetch", event => {
//   return event.respondWith(
//     fetch("https://httpbin.org/ip")
//   )
// })