// this page has title and links for navigation (on top of the page)
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <h2>The Courses I've Taken</h2>
                <ul>
                    <ol><a href="#programming">Programming</a></ol>
                    <ol><a href="#math">Math</a></ol>
                    <ol><a href="#other">Other</a></ol>
                </ul>
            </nav>
        </header>
    )
}

// Thus page should be a link to the next page that would have the information