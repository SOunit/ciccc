import imageSushi from "../img/sushi.png";

const Header = () => {
  return (
    <header className="bg-dark">
      <div className="container">
        <div className="row text-light align-items-center">
          <div className="col-md-8">
            <h1>
              Become a <span className="text-warning">Cat</span>
            </h1>
            <p>
              Nap all day cat dog hate mouse eat string barf pillow no baths
              hate everything but kitty poochy. Sleep on keyboard toy mouse
              squeak roll over.
            </p>
            <a href="/" className="btn btn-primary">
              Start The Enrolment
            </a>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={imageSushi} alt="cat" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
