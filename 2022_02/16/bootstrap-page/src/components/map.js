import MapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  return (
    <section className="p-3 mb-4">
      <div className="container p-3">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center mb-4">Contact Info</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> Danboru
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Phone:</span>(555)-555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Email:</span>purr@rubmybelly.gg
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <MapGl
              initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14,
              }}
              className="map"
              mapboxAccessToken="pk.eyJ1IjoiYnRyYXZlcnN5IiwiYSI6ImNrbmh0dXF1NzBtbnMyb3MzcTBpaG10eXcifQ.h5ZyYCglnMdOLAGGiL1Auw"
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
