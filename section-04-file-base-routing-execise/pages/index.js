import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return <div>
        <div>
            <EventList items={featuredEvents} />
        </div>

    </div>
}

export default HomePage;


