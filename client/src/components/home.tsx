import React from "react";
import justiceImage from "../assets/images/scale.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <p>
        <strong>
          Welcome to the home of the Justice Department of Fakelandia!
        </strong>
      </p>
      <p>
        <strong>
          Here you can browse a list of recent misdemeanours committed by our
          citizens, or you can confess to your own misdemeanour.
        </strong>
      </p>
      <img src={justiceImage} alt="Justice Image" className="center-image" />
    </div>
  );
};

export default Home;
