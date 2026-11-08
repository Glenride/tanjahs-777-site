export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/index.html") {
      const landingUrl = new URL("manifestation-candles-landing.html", url);
      const landingRequest = new Request(landingUrl, request);
      return env.ASSETS.fetch(landingRequest);
    }

    return env.ASSETS.fetch(request);
  },
};
