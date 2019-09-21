const datas = []
for (let i = 1; i < 10; i++) {
  datas.push({ id: i, name: `Product: #${i}`, category: `Catgory: #${i}`, description: `Protective and fashionable`, price: i * 50 })
}
export const state = {
  products: datas
}
