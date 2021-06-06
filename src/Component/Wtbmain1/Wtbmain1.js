// import { Panel } from "bootstrap";
// import Panel from 'react-bootstrap/lib/Panel';
import React from "react";
import { Form, FormLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  Pagination } from "react-bootstrap";

import "./Wtbmain1.css";
function Wtbmain1() {
  return (
    <div className="wtbmain1">
      <div className="container">
        <div className="row pt-5 ">
          <Form>
            <div className="col-md-3 col-12">
              <FormLabel className="select_country">Select Country</FormLabel>
              <div className="select_input">
                <select className="select1">
                  <option className="opt">Select Country</option>
                  <option className="opt" selected>
                    India
                  </option>
                  <option className="opt">Nepal</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <FormLabel className="select_country">Select State</FormLabel>
              <div className="select_input">
                <select className="select1">
                  <option className="opt" selected>
                    Please select a region, state or province.
                  </option>
                  <option className="opt">Andaman & Nicobar</option>
                  <option className="opt">Andra Pradesh</option>
                  <option className="opt">Arunachal Pradesh</option>
                  <option className="opt">Assam</option>
                  <option className="opt">Bihar</option>
                  <option className="opt">Gujarat</option>
                  <option className="opt">Himachal Pradesh</option>
                  <option className="opt">Jammu and kashmir</option>
                  <option className="opt">Andaman & Nicobar</option>
                  <option className="opt">Andra Pradesh</option>
                  <option className="opt">Arunachal Pradesh</option>
                  <option className="opt">Assam</option>
                  <option className="opt">Bihar</option>
                  <option className="opt">Gujarat</option>
                  <option className="opt">Himachal Pradesh</option>
                  <option className="opt">Jammu and kashmir</option>
                  <option className="opt">Andaman & Nicobar</option>
                  <option className="opt">Andra Pradesh</option>
                  <option className="opt">Arunachal Pradesh</option>
                  <option className="opt">Assam</option>
                  <option className="opt">Bihar</option>
                  <option className="opt">Gujarat</option>
                  <option className="opt">Himachal Pradesh</option>
                  <option className="opt">Jammu and kashmir</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <FormLabel className="select_country">Select City</FormLabel>
              <div className="select_input">
                <select className="select1">
                  <option className="opt" selected>
                    Please select
                  </option>
                  <option className="opt">Agra</option>
                  <option className="opt">Aligarh</option>
                  <option className="opt">Allahabad</option>
                  <option className="opt">Ambedkar Nagar</option>
                  <option className="opt">Auraiya</option>
                  <option className="opt">Azamgarh</option>
                  <option className="opt">Basti</option>
                  <option className="opt">Barabanki</option>
                  <option className="opt">Agra</option>
                  <option className="opt">Aligarh</option>
                  <option className="opt">Allahabad</option>
                  <option className="opt">Ambedkar Nagar</option>
                  <option className="opt">Auraiya</option>
                  <option className="opt">Azamgarh</option>
                  <option className="opt">Basti</option>
                  <option className="opt">Barabanki</option>
                  <option className="opt">Agra</option>
                  <option className="opt">Aligarh</option>
                  <option className="opt">Allahabad</option>
                  <option className="opt">Ambedkar Nagar</option>
                  <option className="opt">Auraiya</option>
                  <option className="opt">Azamgarh</option>
                  <option className="opt">Basti</option>
                  <option className="opt">Barabanki</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="sub_btn pt-4">
                <Button type="submit" className="btn btn-success m-1">
                  Submit
                </Button>
                <Button type="reset" className="btn btn-success m-1">
                  Reset
                </Button>
              </div>
            </div>
          </Form>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <hr className="wtb_line"></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 Homes</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Yemar Plaza.Opp Seventh Day,School,Pattambi Rd, Palakkad
                  Ottappalam,Palakkad,679522,India Palakkad, Kerala, India -
                  679522
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr.Shajan babu
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    fourhomes4@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 Homes</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Perinthalmanna Road,Sankaramangalam, Po Pattambi
                  Pattambi,Palakkad,679303,India Palakkad, Kerala, India -
                  679303
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr. Abdullies K A
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    4homesptb@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Navi Mumbai,Plot No.81.Sec-23Kalambol,Panvel,410218,
                  Raigarh(Mh), Maharashtra, India - 410218
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Irshad Omer Sait
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    sales@4by8.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">A & A Enterprises</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Bhagavathinada, P.O,Balaramapuram, Neyyattinkara,
                  Thiruvananthapuram, Kerala, India - 695501
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr.Sajeevan
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    aaenterprisestiles@yahoo.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Kathua,Kharote Morh,Kathua,Kathua,184101,India Kathua, Jammu
                  and Kashmir, India - 184101
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Ankit Mahajan
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    ankitmahajan8888@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Varanasi,221007,India Varanasi, Uttar Pradesh, India - 221007
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Vinod Gupta
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    akbrothersprincepipes@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 Homes</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Yemar Plaza.Opp Seventh Day,School,Pattambi Rd, Palakkad
                  Ottappalam,Palakkad,679522,India Palakkad, Kerala, India -
                  679522
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr.Shajan babu
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    fourhomes4@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 Homes</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Perinthalmanna Road,Sankaramangalam, Po Pattambi
                  Pattambi,Palakkad,679303,India Palakkad, Kerala, India -
                  679303
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr. Abdullies K A
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    4homesptb@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Navi Mumbai,Plot No.81.Sec-23Kalambol,Panvel,410218,
                  Raigarh(Mh), Maharashtra, India - 410218
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Irshad Omer Sait
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    sales@4by8.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">A & A Enterprises</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Bhagavathinada, P.O,Balaramapuram, Neyyattinkara,
                  Thiruvananthapuram, Kerala, India - 695501
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr.Sajeevan
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    aaenterprisestiles@yahoo.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Kathua,Kharote Morh,Kathua,Kathua,184101,India Kathua, Jammu
                  and Kashmir, India - 184101
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Ankit Mahajan
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    ankitmahajan8888@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Varanasi,221007,India Varanasi, Uttar Pradesh, India - 221007
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Vinod Gupta
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    akbrothersprincepipes@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 Homes</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Yemar Plaza.Opp Seventh Day,School,Pattambi Rd, Palakkad
                  Ottappalam,Palakkad,679522,India Palakkad, Kerala, India -
                  679522
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr.Shajan babu
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    fourhomes4@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 Homes</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Perinthalmanna Road,Sankaramangalam, Po Pattambi
                  Pattambi,Palakkad,679303,India Palakkad, Kerala, India -
                  679303
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr. Abdullies K A
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    4homesptb@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Navi Mumbai,Plot No.81.Sec-23Kalambol,Panvel,410218,
                  Raigarh(Mh), Maharashtra, India - 410218
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Irshad Omer Sait
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    sales@4by8.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">A & A Enterprises</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Bhagavathinada, P.O,Balaramapuram, Neyyattinkara,
                  Thiruvananthapuram, Kerala, India - 695501
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr.Sajeevan
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    aaenterprisestiles@yahoo.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Kathua,Kharote Morh,Kathua,Kathua,184101,India Kathua, Jammu
                  and Kashmir, India - 184101
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Ankit Mahajan
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    ankitmahajan8888@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Varanasi,221007,India Varanasi, Uttar Pradesh, India - 221007
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Vinod Gupta
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    akbrothersprincepipes@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 Homes</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Yemar Plaza.Opp Seventh Day,School,Pattambi Rd, Palakkad
                  Ottappalam,Palakkad,679522,India Palakkad, Kerala, India -
                  679522
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr.Shajan babu
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    fourhomes4@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 Homes</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Perinthalmanna Road,Sankaramangalam, Po Pattambi
                  Pattambi,Palakkad,679303,India Palakkad, Kerala, India -
                  679303
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Mr. Abdullies K A
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    4homesptb@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="panel">
              <div className="panel-heading">4 X 8 Traders</div>
              <div className="panel-body">
                <p className="panel_para">
                  <span className="span_panel">Brand Dealer</span>
                  <br />
                  Navi Mumbai,Plot No.81.Sec-23Kalambol,Panvel,410218,
                  Raigarh(Mh), Maharashtra, India - 410218
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  Irshad Omer Sait
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <Link className="link_num" to="#">
                    {" "}
                    9847491242, 4662313750
                  </Link>
                  <br />
                  <span className="span_panel">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <Link className="link_email" to="#">
                    {" "}
                    sales@4by8.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
         
        </div>
        <div className="row">
            <div className="col-md-5 col-12">
            <h3 className="itm pt-5">Items 1 to 21 of 1672 total</h3>
            </div>
            <div className="col-md-7 col-12">
            <Pagination>
                    <Pagination.Item active>{1}</Pagination.Item>

                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>{6}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{80}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Wtbmain1;
