import * as React from "react";
import { Link } from "react-router-dom";
import { AllDetailComponent } from "./AllDetailsComponent";
import "../styles.scss";


export class HomeComponent extends React.Component {
      render() {
            return (
                  <div >
                        <div>
                              <div className='title-container'>ADDRESS BOOK</div>
                              <div className="nav-link">
                                    <Link to='/form' className="nav-links">+ADD</Link>
                              </div>

                        </div>
                        <div>
                              <AllDetailComponent />
                        </div>

                  </div>
            )
      }
}
