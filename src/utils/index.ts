export const formatPrice = (price: number): string =>
  price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
export const formatDate = (date: string): string =>
  new Date(date)
    .toLocaleDateString("uz-UZ", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .split("-")
    .reverse()
    .join(".");