import "../styles/index.css"

import { bind } from "lazim"

import app from "@/app"
import { Details } from "@/lib/details"

bind()
Details()

if (window.Shopify.designMode) {
  document.addEventListener("shopify:section:load", () => {
    bind()

    app.unmount()
    app.mount()
  })

  document.addEventListener("shopify:section:unload", () => {
    app.unmount()
    app.mount()
  })
}

app.on("images:update", () => {
  bind()
})

app.on("app:update", () => {
  app.unmount()
  app.mount()

  Details()
})

app.mount()
