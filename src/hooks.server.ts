import { SvelteKitAuth } from "@auth/sveltekit"
import { AUTH_SECRET, INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET } from "$env/static/private"
import InstagramProvider from "@auth/core/providers/instagram"

export const handle = SvelteKitAuth(async () => {
  return {
    secret: AUTH_SECRET,
    trustHost: true,
    debug: true,
    providers: [InstagramProvider({
      clientId: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
    })],
  }
})
