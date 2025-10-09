import Header from '../components/Header'
import Hero from '../components/Hero'
import Carousel360 from '../components/Carousel360'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Carousel360 />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
