import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <div className="contact-main-container">
      <Navbar />
      <div className="contactus-container">
        <div>
          <img
            src="https://res.cloudinary.com/ditfxnb3j/image/upload/v1709025720/HAIAR_PNG_1_fsdkky.png"
            alt="haiar logo"
          />
        </div>
        <div className="contact-info">
          <h1 className="contactus-heading">For Sales & Dealership Enquiry</h1>
          <p className="color">Email : haiarinstruments@gmail.com </p>
          <div className="address-bg">
            <p className="color">Address </p>
            <p className="color">:</p>
            <p className="color">
              D.No 18-132, Piduguralla (V)(M) Palnadu District-522413
            </p>
          </div>

          <div className="contacts">
            <p className="color">Sk Yusuf </p>
            <p className="color">+91 8092-8092-56</p>
          </div>
          <div className="contacts">
            <p className="color">S.M. Vali </p>
            <p className="color">+91 8092-8092-57</p>
          </div>
          <div className="social-media-container">
            <a
              href="https://api.whatsapp.com/send?phone=+918092809256"
              target="__blank"
            >
              <img
                className="whatsapp"
                src="https://res.cloudinary.com/dewzkraqq/image/upload/v1708269718/pngwing.com_aahpjz.png"
                alt="whatsapp"
              />
            </a>

            <img
              className="whatsapp"
              src="https://res.cloudinary.com/dewzkraqq/image/upload/v1708305169/pngwing.com_1_kfuoz4.png"
              alt="whatsapp"
            />

            <img
              className="whatsapp"
              src="https://res.cloudinary.com/dewzkraqq/image/upload/v1708305170/pngwing.com_2_ep9ram.png"
              alt="whatsapp"
            />
          </div>
        </div>
      </div>

      <div className="info-container2">
        <p className="contactus-below-des">
          Haiar Instruments, started satisfying the customers in weighing
          industry, since 2023. We, proven one of the andhra pradesh leading
          manufacturer and suppliers of electronic weighing scales, industrial
          weighing machines, weighing scale fabrications as well as weighing
          scale spares and accessories. we Provides wide range and variety of
          Electronic and Digital Weighing machines for the Various purposes of
          Customers Weighing in Scientific Labs, Clinics, Laboratories,
          Hospitals, Jewellery Shops, GSM Sections, Retailers, Provisional
          Stores, Parcel and Postal Departments, Bakery & Sweet shops, Coffee &
          Tea shops, Educational Institutes, Textile Industries, Logistics,
          Heavy-duty Industries, Steel Plants, Metal Scrap Industries, Chemical
          Industries, Airways and Cloth Industries with types of models and load
          cell based balances having capacity from 10mg to 10 tons. We are proud
          to state that we have a widespread network across the country. The
          team of highly qualified Professionals and Engineers provide prompt
          after sales service support to our prestigious clients.
        </p>
        <div>
          <h2 className="sub-heading2">Our Infrastructure</h2>
          <p className="contactus-below-des">
            Haiar Instruments, well equipped with the state of art weighing
            scales manufacturing facilities. We are proud to possess a skilled
            and trained workforce, an efficient management, R&D department and a
            production unit that is backed by hi-tech machines and sophisticated
            technology. We are capable of supplying large quantities of Weighing
            Scales with ease with the help of our Integrated Manufacturing Unit,
            Vast Experienced Production Team Members, Technically Qualified
            Engineers, efficient transportation facilities and strong logistic
            system
          </p>
        </div>
        <div>
          <h2 className="sub-heading2">Our Services</h2>
          <p className="contactus-below-des">
            Haiar Instruments, always gives Priority to After Sales Service &
            Support towards Customer Focus. Our reputation of providing our
            esteemed customers with the best service available, has given us an
            enviable position in the weighing scale industry. We offer a full
            line and wide spectrum of choice to them, enabling them to select
            the most suitable product in terms of specification and application.
          </p>
        </div>
        <div>
          <h2 className="sub-heading2">Our Quality</h2>
          <p className="contactus-below-des">
            Haiar Instruments, are an excessively quality centric Weighing
            Company, so exercise stringent quality policies. We keep on tracking
            Manufacturing Defaults, strict quality testing team, stringent tests
            on all levels of production, So,that We are a client centric
            organization, which strongly believes that growth of every business
            is directly proportional to clients’ satisfaction.
          </p>
        </div>
        <div>
          <h2 className="sub-heading2">Our Satisfaction</h2>
          <p className="contactus-below-des">
            Haiar Instruments, Always get Satisfaction as much we satisfy the
            Customers as well as Dealers. We are Customer Centric Weighing Scale
            Company, which strongly believes that growth of every business is
            directly proportional to Customer Satisfaction. Our entire product
            range of Electronic Weighing Scales is manufactured using duly
            tested raw material that is procured from the reliable vendors of
            the market. Our team of quality controllers maintains high quality
            standards and ensures that only quality tested products are
            delivered at clients' end.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
