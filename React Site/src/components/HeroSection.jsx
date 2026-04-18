// this section is the starting page that visistors
// see when they open the page
// add it to app.jxs

import './HeroSection.css'

export default function HeroSection() {
    return (
        <main className="hero">
            <h1>Why I'm Learning React</h1>

            <p>
                I'm learning React to improve my coding skills and build modern applications.
            </p>

            <ul>
                <ol>Build real-world applications</ol>
                <ol>Improve front-end skills</ol>
                <ol>Prepare for tech jobs</ol>
                <ol>Learn modern tools</ol>
            </ul>

            <img src="hero.png" alt="Person coding on a laptop" />
            <img src="course.png" alt="Java course illustration" />
        </main>
    )
}
