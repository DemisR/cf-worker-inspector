addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {

  // let response = ''
  // for (const element of request.headers) {
  //   response = response.concat(element[0], " => ", element[1], "\n")
  // }

  const proxyHeader = request.headers.get("via")
  if (proxyHeader) {
    proxied = true
  } else {
    proxied = false
  }

  const asResponse  = await fetch("https://api.bgpview.io/asn/" + request.cf.asn)
  const asInfo = await asResponse.json()
  console.log(asInfo)


  const  data = {
    source_ip: request.headers.get("CF-Connecting-IP"),
    country: request.cf.country,
    region: request.cf.region,
    asn: request.cf.asn,
    as_name: asInfo['data']['name'],
    proxied: proxied
  }

  const json =  JSON.stringify(data, null, 2)

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