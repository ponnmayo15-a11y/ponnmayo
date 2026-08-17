import type { Product } from "../data/site"

export function ProductCard({ product }: { product: Product }) {
  const isLive = product.paymentUrl && product.paymentUrl !== "#"

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">{product.name}</h3>
        {product.badge && (
          <span className="shrink-0 rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-medium text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300">
            {product.badge}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{product.description}</p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{product.priceLabel}</span>
        {isLive ? (
          <a
            href={product.paymentUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-700"
          >
            申し込む
          </a>
        ) : (
          <span
            title="決済リンク未設定（src/data/site.ts の paymentUrl を編集してください）"
            className="cursor-not-allowed rounded-full bg-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-400 dark:bg-zinc-800 dark:text-zinc-600"
          >
            準備中
          </span>
        )}
      </div>
    </div>
  )
}
