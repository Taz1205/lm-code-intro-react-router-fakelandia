import React from "react";
import justiceImage from "../../assets/images/scale.jpg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <p className="text-center text-2xl">
        <strong>
          Welcome to the home of the Justice Department of Fakelandia!
        </strong>
      </p>
      <br />
      <p className="text-center text-2xl">
        <strong>
          Here you can browse a list of recent misdemeanours committed by our
          citizens, or you can confess to your own misdemeanour.
        </strong>
      </p>
      <img src={justiceImage} alt="Justice Image" className="block mx-auto" />
    </div>
  );
};

export default Home;
