import imageSushi from "../img/sushi.png";

const Meow = () => {
  return (
    <section className="bg-dark text-light">
      <div className="container m-5">
        <div className="row align-items-center">
          <div className="col-md-7 p-5">
            <h1>Meow All Night</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore assumenda delectus suscipit unde voluptate animi aliquam
              repellendus dolores nulla harum sapiente ex fugiat accusamus,
              deleniti sit facilis cumque praesentium maxime?
            </p>
            <button className="btn btn-light">Read More</button>
          </div>
          <div className="col-md-5 p-5">
            <img className="img-fluid" src={imageSushi} alt="cat" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meow;
