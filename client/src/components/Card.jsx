/* eslint-disable react/prop-types */
export default function Card({ title, description, setShowNote }) {
    return (
        <div className="card" onClick={() => setShowNote((v) => !v)}>
            <h1 className="card-header">{title}</h1>
            <p className="card-details">{description}</p>
        </div>
    );
}
