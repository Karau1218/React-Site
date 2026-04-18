import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Section from './components/Section'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <HeroSection />
      <Section id = "programming" title="Programming Courses">
        <Card title="Java" description="Learned OOP, data structures, and algorithms." />
        <Card title="Web Development" description="HTML, CSS, and JavaScript basics." />
        <Card title="React" description="Building modern front-end apps." />
      </Section>

      <Section id="math" title="Math Courses">
        <Card title="Algebra" description="Equations and problem solving." />
        <Card title="Statistics" description="Data analysis and probability." />
      </Section>

      <Section id="other" title="Other Courses">
        <Card title="Communication" description="Improved speaking and teamwork." />
        <Card title="Ethics" description="Learned decision-making principles." />
      </Section>

      <Footer />
      </div>
    </>
  )
}

export default App