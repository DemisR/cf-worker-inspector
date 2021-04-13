# 👷 HTTP Inspector

__Project for test CloudFlare workers__

Inpsect HTTP request, detect if behind proxy ,
respond with informations like IP and AS name.

## Wrangler

- Generate project from template `wrangler generate projectname https://github.com/cloudflare/worker-template`
- Test your worker `wrangler dev`
- Publish changes `wrangler publish`
- Authenticate Wrangler with your Cloudflare login `wrangler login`

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).