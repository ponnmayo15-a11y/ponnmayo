// このファイルを編集するだけでページの中身を差し替えられます。
// 決済リンクは Stripe の「支払いリンク（Payment Link）」などのURLを貼ってください。

export type SnsLink = {
  label: string
  url: string
  // "x" | "tiktok" | "instagram" | "youtube" | "line" | "note" などお好みで
  platform: "x" | "tiktok" | "instagram" | "youtube" | "line" | "note" | "other"
}

export type Product = {
  id: string
  name: string
  description: string
  priceLabel: string
  // 決済ページ・申込みフォームのURL。未設定なら "#" のままにしておけばボタンは非活性表示になる
  paymentUrl: string
  category: "front" | "back" | "subscription"
  badge?: string
}

export const profile = {
  name: "AI社長",
  tagline: "SNS発信 × Claude Codeで、あなたの「困った」を解決します",
  bio: "Claude Codeを使った開発・自動化案件を承っています。まずはSNSの投稿からお気軽にどうぞ。",
  avatarInitial: "社",
}

export const snsLinks: SnsLink[] = [
  { label: "X (旧Twitter)", url: "#", platform: "x" },
  { label: "TikTok", url: "#", platform: "tiktok" },
]

export const products: Product[] = [
  {
    id: "front-1",
    name: "無料相談・お問い合わせ",
    description: "まずは気軽に相談したい方向けの入口商品です。",
    priceLabel: "無料",
    paymentUrl: "#",
    category: "front",
  },
  {
    id: "back-1",
    name: "スポット開発・自動化案件",
    description: "Claude Codeを使ったツール開発・業務自動化を単発で依頼できます。",
    priceLabel: "50,000円〜 / 件",
    paymentUrl: "#",
    category: "back",
  },
  {
    id: "sub-1",
    name: "月額サポートプラン",
    description: "継続的な開発・運用サポートを月額で。",
    priceLabel: "9,800円 / 月",
    paymentUrl: "#",
    category: "subscription",
    badge: "人気",
  },
]
