/* eslint-disable react/prop-types */
export default function Card({ title, description }) {
    return (
        <div className="card">
            <h1 className="card-header">{title}</h1>
            <p className="card-details">{description}</p>
        </div>
    );
}
