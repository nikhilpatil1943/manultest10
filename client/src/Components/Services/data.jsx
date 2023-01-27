import React from "react";

import ServiceImg1 from "../../Images/Services/orbasedording.png";
import ServiceImg2 from "../../Images/Services/staffportal.png";
import ServiceImg3 from "../../Images/Services/adminportal.png";
import ServiceImg4 from "../../Images/Services/marketing.png";

export const Service1 = () => {
  return (
    <div className="Services__card">
      <div className="Services__content">
        <h2>QR based ordering + Personal website</h2>
        <p>
          We provide simple and classy Personal website & QR code-based ordering
          system that allows customers to scan the code with their smartphones,
          view the menu, and place an order directly from device. Additionally,
          you will have about us, gallery page and testimonials on your personal
          website.
        </p>
        <ol>
          <li>This streamlines the ordering process</li>
          <li>Reduces wait times</li>
          <li>Helps you in improving overall customer experience.</li>
        </ol>
      </div>
      <div className="Services__img">
        <img src={ServiceImg1} alt={ServiceImg1} />
      </div>
    </div>
  );
};

export const Service2 = () => {
  return (
    <div className="Services__card">
      <div className="Services__content">
        <h2>Staff portal and Kitchen Dashboard</h2>
        <p>
          Let’s say one of the customer don’t want to order by own and need
          staff help to order, well then the staff can use their staff portals
          to take orders and satisfy the customer needs.
        </p>
        <p>
          Kitchen dashboard will fetch all the current orders coming from Staff
          or customer portal directly, resulting in good staff productivity.
        </p>
        <ol>
          <li>Ordering portals for staff</li>
          <li>Live table view</li>
          <li>
            Both portals will be integrated with each other, which will help
            staff manage easily. .
          </li>
        </ol>
      </div>
      <div className="Services__img">
        <img src={ServiceImg2} alt={ServiceImg2} />
      </div>
    </div>
  );
};

export const Service3 = () => {
  return (
    <div className="Services__card">
      <div className="Services__content">
        <h2>Admin Portal</h2>
        <p>
          In order to monitor your outlet and to make better decision one must
          have an Admin panel with outlet statistics, sales record system and
          inventory management and many more. We have one-stop restaurant
          analytics dashboard that ensures you don't have to go through tons of
          reports to know how your restaurant is doing.
        </p>
        <ol>
          <li>User Data management</li>
          <li>Sales Record system</li>
          <li>Inventory management</li>
          <li>Coupon code generator</li>
          <li>transaction history</li>
          <li>Staff devices management</li>
        </ol>
      </div>
      <div className="Services__img">
        <img src={ServiceImg3} alt={ServiceImg3} />
      </div>
    </div>
  );
};

export const Service4 = () => {
  return (
    <div className="Services__card">
      <div className="Services__content">
        <h2>Marketing</h2>
        <p>
          Do you know what is the most essential aspect of running a successful
          café/ restaurant? Well! It’s Marketing?
          <br />
          Want to improve Customer loyalty?
          <br />
          Attract new customers?
          <br />
          or want to raise awareness of your business?
          <br />
          Well the answer for all is Marketing.
          <br />
          We provide:
          <br />
        </p>
        <ol>
          <li>Email marketing</li>
          <li>WhatsApp SMS marketing</li>
          <li>Coupon code delivering</li>
        </ol>
      </div>
      <div className="Services__img">
        <img src={ServiceImg4} alt={ServiceImg4} />
      </div>
    </div>
  );
};
