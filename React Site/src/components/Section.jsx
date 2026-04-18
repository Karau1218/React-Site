import './Section.css'

export default function Section({ title, children , id}) {
    return (
        <section className="section" id={id}>
            <h2>{title}</h2>
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}