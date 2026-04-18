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
            <li>Build real-world applications</li>
            <li>Improve front-end skills</li>
            <li>Prepare for tech jobs</li>
            <li>Learn modern tools</li>
            </ul>

            {/* adds images well when wanting to deploy */}
            <img src="/React-Site/hero.png" alt="Person coding on a laptop" />
            <img src="/React-Site/course.png" alt="Java course illustration" />
        </main>
    )
}
