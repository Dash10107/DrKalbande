import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Publications from "./components/Publications"
import Research from "./components/Research"
import Students from "./components/Students"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <Header />
      </header>

      <main className="flex-grow">
        <section id="home" className="py-8">
          <Home />
        </section>

        <section id="publications" className=" pt-8">
          <div className=" mx-auto px-4">
            <Publications />
          </div>
        </section>

        <section id="research" className="py-8">
          <div className="mx-auto px-4">
           <Research />
          </div>
        </section>

        <section id="students" className=" py-8">
          <div className="mx-auto px-4">
            <Students />
          </div>
        </section>

        <section id="contact" className="py-8">
          <div className="mx-auto px-4">
           <Contact />
          </div>
        </section>
      </main>

    <Footer/>
    </div>
  )
}

export default App

