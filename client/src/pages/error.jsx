import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    document.title = `Musicon - 404`;
  }, []);
  return (
    <div className="container">
      <div className="error_404">
        <h1>404</h1>
        <p>This page could not be found.</p>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
};

export default Error;