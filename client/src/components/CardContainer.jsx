/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Card from './Card';

export default function CardContainer({ showNote, setShowNote }) {
    return (
        <div className="all-cards">
            <Card
                title="How to Change a Tire"
                description="If you get a flat tire, don't panic! Here's how to change it: 1. Park your car on a safe surface. 2. Turn on your hazard lights. 3. Loosen the lug nuts. 4. Jack up the car. 5. Remove the flat tire. 6. Put on the spare tire. 7. Tighten the lug nuts. 8. Lower the car. "
                setShowNote={setShowNote}
            />
        </div>
    );
}
