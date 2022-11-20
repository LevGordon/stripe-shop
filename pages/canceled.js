import React from "react";
import { BiErrorAlt } from 'react-icons/bi'
import Link from 'next/link'

function canceled() {

  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <BiErrorAlt />
        </p>
        <h2>Whoops! Something went wrong.</h2>
        <p className="description">
          Please try again.
        </p>
        <Link href='/'>
          <button type="button" width={300} className="btn">
            Return to Store
          </button>
        </Link>
      </div>
    </div>
  );
}

export default canceled;
