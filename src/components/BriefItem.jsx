export default function BriefItem({ title, description }) {
    return (
        <div className="brief-item">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
