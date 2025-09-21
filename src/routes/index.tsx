import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import HeroSection from '@/components/hero-section'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <HeroSection />
    </div>
  )
}
