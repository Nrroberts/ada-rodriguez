import Navigation from '@/components/Navigation'
import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Header />
      <About />
      <Experience />
      <Footer />
    </main>
  )
}