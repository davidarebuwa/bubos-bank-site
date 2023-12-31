import React from "react";

import "./styles.css";

function Cover({title, description}) {
  return (
    <div>
      <section class="page-banner-area page-contact">
        <div class="overlay"></div>
        {/* <!-- Content --> */}
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9 col-md-12 col-12 text-center">
              <div class="page-banner-content">
                <h1 class="display-4 font-weight-bold">{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cover;