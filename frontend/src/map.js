import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import RoutingMachine from "react-leaflet-routing-machine"; // Import routing component

const App = () => {
    const [userPosition, setUserPosition] = useState({
        latitude: 28.6139,
        longitude: 77.209,
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [markerPosition, setMarkerPosition] = useState(null); // State for the single marker position
    const [nearbyPlaces, setNearbyPlaces] = useState([]);
    const [doctorPosition, setDoctorPosition] = useState(null); // State for the doctor's position

    const customIcon = new Icon({
        iconUrl: "/marker.png",
        iconSize: [40, 40],
    });

    const customHealtCareIcon = new Icon({
        iconUrl: "/healthcare.png",
        iconSize: [40, 40],
    });

    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 2) {
        try {
            const response = await axios.get(
            `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`
            );
            setSuggestions(response.data);
        } catch (error) {
            console.error("Error fetching location suggestions:", error);
        }
        } else {
        setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        const latitude = parseFloat(suggestion.lat);
        const longitude = parseFloat(suggestion.lon);

        setUserPosition({ latitude, longitude });
        setMarkerPosition([latitude, longitude]);
        setSearchQuery(suggestion.display_name);
        setSuggestions([]);

        fetchNearbyPlaces(latitude, longitude);
    };

    const fetchNearbyPlaces = async (latitude, longitude) => {
        const types = ["hospital"];
        const places = await Promise.all(
        types.map((type) =>
            axios.get(
            `https://overpass-api.de/api/interpreter?data=[out:json];node(around:2000,${latitude},${longitude})[amenity=${type}];out;`
            )
        )
        );

        const allPlaces = places.flatMap((response) =>
        response.data.elements.map((place) => ({
            name: place.tags.name,
            lat: place.lat,
            lon: place.lon,
            type: place.tags.amenity,
        }))
        );

        setNearbyPlaces(allPlaces);
    };

    const UpdateMapCenter = () => {
        const map = useMap();
        useEffect(() => {
        map.setView([userPosition.latitude, userPosition.longitude], 13);
        }, [userPosition, map]);
        return null;
    };

    const handleDoctorSelect = (doctorLat, doctorLon) => {
        setDoctorPosition([doctorLat, doctorLon]); // Set doctor position
    };

    return (
        <>
        <div style={{ position: "relative", marginBottom: "10px" }}>
            <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a place"
            style={{
                padding: "8px",
                fontSize: "16px",
                width: "300px",
            }}
            />
            {suggestions.length > 0 && (
            <ul
                style={{
                listStyleType: "none",
                margin: 0,
                padding: "8px",
                border: "1px solid #ccc",
                width: "300px",
                maxHeight: "150px",
                overflowY: "auto",
                backgroundColor: "#fff",
                position: "absolute",
                zIndex: 1000,
                top: "40px",
                }}
            >
                {suggestions.map((suggestion, index) => (
                <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{
                    padding: "8px",
                    cursor: "pointer",
                    }}
                >
                    {suggestion.display_name}
                </li>
                ))}
            </ul>
            )}
        </div>

        <MapContainer
            center={[userPosition.latitude, userPosition.longitude]}
            zoom={13}
            style={{ height: "100vh", width: "100%" }}
        >
            <UpdateMapCenter />
            <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerPosition && (
            <Marker position={markerPosition} icon={customIcon}>
                <Popup>{searchQuery}</Popup>
            </Marker>
            )}
            {nearbyPlaces.map((place, index) => (
            <Marker
                key={index}
                position={[place.lat, place.lon]}
                icon={customHealtCareIcon}
                eventHandlers={{
                click: () => handleDoctorSelect(place.lat, place.lon), // Select doctor location on click
                }}
            >
                <Popup>
                {place.name} <br /> Type: {place.type}
                </Popup>
            </Marker>
            ))}
            {doctorPosition && (
            <RoutingMachine
                waypoints={[
                [userPosition.latitude, userPosition.longitude],
                doctorPosition,
                ]}
            />
            )}
        </MapContainer>
        </>
    );
};

export default App;
