import './Card.css'

export default function Card({ title, description, rating, category, date }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="category">{category}</span>
            <p>⭐ {rating}</p>
            <p>{date}</p>
        </div>
    )
}