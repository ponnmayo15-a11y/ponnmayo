import type { Product } from "../data/site"
import { ProductCard } from "./ProductCard"

const categoryTitles: Record<Product["category"], string> = {
  front: "まずはここから",
  back: "サービス・案件",
  subscription: "継続サポート",
}

export function ProductSection({ category, products }: { category: Product["category"]; products: Product[] }) {
  const items = products.filter((p) => p.category === category)
  if (items.length === 0) return null

  return (
    <section className="flex w-full flex-col gap-3">
      <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
        {categoryTitles[category]}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
