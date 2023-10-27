import { ModeToggle } from '~/components/layout/mode-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ModeToggle />
      <p className="text-md font-medium text-secondary-foreground">
        Bem-vindo ao
      </p>
      <h1 className="text-4xl font-bold text-primary">Pede AI!</h1>
    </main>
  )
}
