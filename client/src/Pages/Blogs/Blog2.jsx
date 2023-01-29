import React from "react";
import "./Blog.css";
import { NavLink } from "react-router-dom";
import Img1 from "../../Images/Blog/blogimg.png";
import Img2 from "../../Images/Blog/blogimg2.jpg";
import Arrow from "../../Images/Blog/arrow.png";

const BlogPage2 = () => {
  return (
    <div className="BlogPage">
      <img src={Img1} alt="Blog" />
      <div className="BlogPage__content">
        <h1>How technology has changed the hotel industry.</h1>
        <img src={Img2} alt="Blog" />
        <div>
          <h2>History</h2>
          <p>
            The HORECA world or the hotels and hospitality world has been
            changing so dramatically, in this field technology has made its way
            to the top and now these fields or sectors cannot be imagined
            without technology, you will be amazed till 1927 the most
            technologically equipped hotels were those who had a phone on its
            reception desk, and now these facilities are available in the most
            basic inn. It is no more a secret that you cannot make it big in
            this industry unless you make technology your backbone and main
            ingredient, because only then you will be able to cater to such a
            big population, let us discuss some of the best technologies that
            can make your sales figure skyrocket.
          </p>
          <h2>Technologies</h2>

          <h3>1. QR codes:</h3>
          <p>
            Have you ever gone to a café and ordered some exquisite dishes and
            later when it came to payment you didn’t have the change, and just
            so that restaurants do not have to pay change they give you éclairs,
            I find it very annoying and then the apple of my eye arrived the QR
            codes, just scan and pay the exact amount no more éclairs and
            change. Till date, I have found this technology one of the most
            useful things, and I cannot thank it enough, as it has started
            providing a wholesome customer experience QR codes has been so
            convenient that almost ⅓ rd of payments in China are from QR codes,
            nowadays, it has been one of the emerging technologies in Hotel
            industry as now you can also place orders by just scanning your ID
            and make payment through it has made data organized and given the
            easiest way of ordering and paying.
          </p>

          <h3>2. Inventory management system:</h3>

          <p>
            Have you ever wondered that when your business was small you were
            not facing much difficulty handling the inventory and as you grow
            the problems grow along with it. Well, this is not a common problem
            many businesses face the same problem because they are not updating
            themselves with the changing trends, if I say that you can cut down
            your cost by 5% and increase profits by 10%, won’t this be great,
            and also let me say it to you that you can be better more than 43%
            of retail hotel businesses because they don’t know how to manager
            their inventory. It helps you to cater to your customers more
            efficiently. This helps you also analyze the previous trends of the
            prices at which you have purchased your inventory and make require
            adjustments, if this is alienated with the CRM you are almost in the
            league of modern hotels that are leading the market with technology
            and better profits.
          </p>

          <h3>3.CRM</h3>
          <p>
            Have you ever felt that your customer retention rate is very low, or
            have you ever felt that you are using multiple tools at a time and
            not getting enough results, What if I say that you just need to use
            only a single software, and you will have more than 56% customers
            loyal to you, you heard it right its CRM (customer relationship
            management) a software that will help you manage and protect the
            customers data and send to your customers personally curated emails
            in no time. This is not it, it will also show you your major sales,
            your highest selling time and most preferred item by customers. If
            you can have all such things in just a single software at your
            fingertip, your sales figures can do wonders by going triple in just
            a single year.
          </p>
          <p>
            Well this is not just it, it won’t just help you boost your
            customer’s data you can also use it for internal purpose by tracking
            the productivity of your customers, and these are just for starters
            one can create wonders if used rightly
          </p>

          <h3>Conclusion :</h3>
          <p>
            No matter what technology you use to develop your hotel business
            it's just that you need to keep yourself updated with the technology
            and make good use of your resources, once upon a time scanning a
            screen and paying or increasing your profit by checking your
            inventory was a crazy idea, but in current times these are the most
            efficient ideas, and no matter what there are any upcoming crazy
            ideas, so all we need to do is just develop ourselves with the
            technology and serve orders.
          </p>
        </div>
      </div>
      <NavLink className="Services__nextblog" to="/blog3">
        Read Next Blog <img src={Arrow} alt="" />
      </NavLink>
    </div>
  );
};

export default BlogPage2;
