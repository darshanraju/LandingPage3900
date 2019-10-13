import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Where
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control my-text"
                />
                <br />
                <div className="table-form">
                  <div className="form-cell">
                    <label
                      htmlFor="defaultFormCardEmailEx"
                      className="grey-text font-weight-light"
                    >
                      Check-in
                    </label>
                    <input
                      placeholder="Selected date"
                      type="date"
                      id="date-picker-example"
                      class="form-control datepicker"
                    />
                    <label for="date-picker-example"></label>
                  </div>

                  <div className="form-cell">
                    <label
                      htmlFor="defaultFormCardEmailEx"
                      className="grey-text font-weight-light label-spacing-right"
                    >
                      Check-out
                    </label>
                    <input
                      placeholder="Selected date"
                      type="date"
                      id="date-picker-example"
                      class="form-control datepicker input-spacing-right"
                    />
                  </div>
                </div>
                <div className="table-form">
                  <div className="table-cell">
                    <div class="def-number-input number-input safari_only">
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="minus"
                      ></button>
                      <input
                        class="quantity"
                        min="0"
                        name="quantity"
                        value="1"
                        type="number"
                      />
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="plus"
                      ></button>
                    </div>{" "}
                  </div>

                  <br />
                  <div>
                    <MDBBtn className="btn btn-outline-purple" type="submit">
                      Search
                      <MDBIcon icon="home" className="ml-2" />
                    </MDBBtn>
                  </div>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
