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
        <Card title="Java" description="Learned OOP, data structures, and algorithms." rating="4.0/5" category="Programming" date="Fall 2025"/>
        <Card title="Web Development" description="HTML, CSS, and JavaScript basics." rating="4.5/5" category="Programming" date="Winter 2025"/>
        <Card title="React" description="Building modern front-end apps." rating="4.8/5"  category="Programming" date="Spring 2026"/>
      </Section>

      <Section id="math" title="Math Courses">
        <Card title="Algebra" description="Equations and problem solving."  rating="4.0/5" category="Programming" date="Fall 2020" />
        <Card title="Statistics" description="Data analysis and probability."  rating="4.1/5" category="Programming" date="Fall 2020" />
      </Section>

      <Section id="other" title="Other Courses">
        <Card title="Communication" description="Improved speaking and teamwork."  rating="5.0/5" category="Programming" date="Fall 2021"/>
        <Card title="Ethics" description="Learned decision-making principles."  rating="5.0/5" category="Programming" date="Fall 2021" />
      </Section>

      <Footer />
      </div>
    </>
  )
}

export default App