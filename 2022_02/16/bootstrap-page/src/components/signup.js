const Signup = () => {
  return (
    <section className="bg-warning p-3">
      <div className="container p-3">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="text-light mb-0">Sign Up For Our Mewsletter</h4>
          </div>
          <div className="col-md-6">
            <form className="d-flex">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
