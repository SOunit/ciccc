import imageCat from "../img/cat.png";

const Sleep = () => {
  return (
    <section>
      <div className="container m-5">
        <div className="row align-items-center">
          <div className="col-md-5 p-5">
            <img className="img-fluid" src={imageCat} alt="cat" />
          </div>
          <div className="col-md-7 p-5">
            <h1>Sleep 18 Hours</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore assumenda delectus suscipit unde voluptate animi aliquam
              repellendus dolores nulla harum sapiente ex fugiat accusamus,
              deleniti sit facilis cumque praesentium maxime?
            </p>
            <button className="btn btn-light">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sleep;
