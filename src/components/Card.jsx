import React from "react";

const Card = (props) => {

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={props.img}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            {props.type}
          </p>
          <div className="card-actions justify-end">
        <a className="btn btn-outline btn-secondary">Delete</a>
        <a className="btn btn-outline btn-primary" href="/update/:id">Edit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;