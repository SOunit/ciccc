import imageKitty1 from "../img/kitty-1.png";
import imageKitty2 from "../img/kitty-2.png";
import imageKitty3 from "../img/kitty-3.png";
import imageKitty4 from "../img/kitty-4.png";

const Instructors = () => {
  return (
    <section className="bg-warning">
      <div className="container p-4">
        <h2 className="text-light text-center">Our Instructors</h2>
        <p className="text-light text-center mb-4">
          Our instructors all have 5+ years of pooping on grasses while licking
          their paws experience.
        </p>
        <div className="row row-cols-md-4 g-4 mb-4">
          <div className="col p-3">
            <div className="card h-100">
              <img
                src={imageKitty1}
                alt="..."
                className="card-img-top rounded-circle w-50 mx-auto p-2"
              />
              <div className="card-body text-center">
                <h3 className="card-title mb-3">Tuna</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  inventore debitis ipsam expedita.
                </p>
                <ul className="d-flex justify-content-around p-0 mx-auto w-50">
                  <li>
                    <i className="bi bi-twitter"></i>
                  </li>
                  <li>
                    <i className="bi bi-facebook"></i>
                  </li>
                  <li>
                    <i className="bi bi-linkedin"></i>
                  </li>
                  <li>
                    <i className="bi bi-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div className="card h-100">
              <img
                src={imageKitty2}
                alt="..."
                className="card-img-top rounded-circle w-50 mx-auto p-2"
              />
              <div className="card-body text-center">
                <h3 className="card-title mb-3">Koshka</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  inventore debitis ipsam expedita.
                </p>
                <ul className="d-flex justify-content-around p-0 mx-auto w-50">
                  <li>
                    <i className="bi bi-twitter"></i>
                  </li>
                  <li>
                    <i className="bi bi-facebook"></i>
                  </li>
                  <li>
                    <i className="bi bi-linkedin"></i>
                  </li>
                  <li>
                    <i className="bi bi-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div className="card h-100">
              <img
                src={imageKitty3}
                alt="..."
                className="card-img-top rounded-circle w-50 mx-auto p-2"
              />
              <div className="card-body text-center">
                <h3 className="card-title mb-3">Meo</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  inventore debitis ipsam expedita.
                </p>
                <ul className="d-flex justify-content-around p-0 mx-auto w-50">
                  <li>
                    <i className="bi bi-twitter"></i>
                  </li>
                  <li>
                    <i className="bi bi-facebook"></i>
                  </li>
                  <li>
                    <i className="bi bi-linkedin"></i>
                  </li>
                  <li>
                    <i className="bi bi-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div className="card h-100">
              <img
                src={imageKitty4}
                alt="..."
                className="card-img-top rounded-circle w-50 mx-auto p-2"
              />
              <div className="card-body text-center">
                <h3 className="card-title mb-3">Ziggy</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  inventore debitis ipsam expedita.
                </p>
                <ul className="d-flex justify-content-around p-0 mx-auto w-50">
                  <li>
                    <i className="bi bi-twitter"></i>
                  </li>
                  <li>
                    <i className="bi bi-facebook"></i>
                  </li>
                  <li>
                    <i className="bi bi-linkedin"></i>
                  </li>
                  <li>
                    <i className="bi bi-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
