import { component } from "picoapp"

import { addItemById } from "@/lib/cart"

export default component((node) => {
  const form = node.querySelector('form[action^="/cart/add"]')

  if (!form) {
    return
  }
  const select = node.querySelector("select[data-option-main]")
  const membership = node.querySelectorAll(
    "[data-checkout-process=membership] input[data-selling-plan-id]"
  )
  const submitBundle = node.querySelector("button[data-submit-bundle]")
  const submit = form.querySelector('button[type="submit"]')
  const { addToCart, adding } = window.theme.product
  let sellingId;
  console.log(submitBundle)
  const setItemStorage = (inputs) => {
    inputs.forEach((input) => {
      if (input.checked) {
        sellingId = {
          sellingId: input.dataset.sellingPlanId,
          Id: input.value,
        }
      }
    })
    const sellingIdString = JSON.stringify(sellingId)
    localStorage.setItem("productVariant", select.selectedOptions[0].value)
    localStorage.setItem("sellingId", sellingIdString)
  }
  submitBundle.addEventListener("click", () => {
    setItemStorage(membership);
    window.location.href = "/pages/checkout-process";
  })
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    submit.disabled = true
    submit.innerHTML = `<span>${adding}</span>`

    const formData = new FormData(form)
    const id = formData.get("id")
    const quantity = formData.get("quantity")

    addItemById(id, quantity)
      .then((data) => {
        console.log(data)
      })
      .finally(() => {
        submit.disabled = false
        submit.innerHTML = `<span>${addToCart}</span>`
      })
  })
})
