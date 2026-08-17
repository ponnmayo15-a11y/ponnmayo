import { profile, snsLinks, products } from "./data/site"
import { SocialIcon } from "./components/SocialIcon"
import { ProductSection } from "./components/ProductSection"

function App() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-xl flex-col items-center gap-10 bg-zinc-50 px-5 py-12 dark:bg-zinc-950">
      <header className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fuchsia-600 text-3xl font-bold text-white">
          {profile.avatarInitial}
        </div>
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{profile.name}</h1>
        <p className="text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">{profile.tagline}</p>
        <p className="max-w-sm text-sm text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
      </header>

      <nav className="flex w-full flex-col gap-3">
        {snsLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <SocialIcon platform={link.platform} className="h-5 w-5 shrink-0" />
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex w-full flex-col gap-8">
        <ProductSection category="front" products={products} />
        <ProductSection category="back" products={products} />
        <ProductSection category="subscription" products={products} />
      </div>

      <footer className="text-xs text-zinc-400 dark:text-zinc-600">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  )
}

export default App
