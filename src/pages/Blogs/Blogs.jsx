import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="my-4 lg:my-8">
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className="collapse collapse-arrow bg-base-200 my-4 lg:my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a credential that represents the authorization
            granted to a client application to access specific resources on
            behalf of a user.It is used to gain access to protected resources by
            presenting the token to the server.Access tokens have a limited
            lifespan.
            <br />A refresh token is a credential used to obtain a new access
            token when the current access token expires. It is designed to be
            long-lived and securely stored.The client exchanges a refresh token
            for a new access token without requiring the user to reauthenticate.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-4 lg:my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do they work and where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            The client initiates the authentication process by redirecting the
            user to an authorization server.The user authenticates and grants
            permission for the client to access specific resources.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-4 lg:my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is express js?
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a minimal and flexible web application framework for
            Node.js, designed to make building web applications and APIs for
            more straightforward. It is one of the most popular and widely used
            frameworks for building server-side applications in the Node.js
            ecosystem.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 my-4 lg:my-8">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          CWhat is Nest JS ?
        </div>
        <div className="collapse-content">
          <p>
            Nest. js is a server-side Node. js framework that's great for
            building highly testable and maintainable backend applications.it
            helps build server-side applications.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          My Code explanation:
        </div>
        <div className="collapse-content">
          <p>
            In this site one can add a job,post a job abd update or delete a
            post.the login is secured with jwt.user datas also loading
            dynamically according to logged in user.user can see their post and
            applied jobs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
