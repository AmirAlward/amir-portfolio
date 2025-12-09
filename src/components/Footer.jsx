import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4 sm:pt-5 sm:pb-6 sm:px-3.5">
      <div className="max-w-5xl sm:p-5 pt-2 px-4 mx-auto flex flex-col items-center gap-y-5  md:flex-row md:justify-between md:space-y-0">
        

        {/* Item 1: Copyright */}
        <div className="order-2 w-full flex-col md:ml-20 md:justify-items-start md:order-1">
          <p
            className="text-[#666666] text-md font-light  text-center"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            © Amir Al-Ward  {new Date().getFullYear()} 
          </p>
        </div>

        {/* Item 2: Links */}
        <div className="order-1 w-full flex flex-row md:mr-20 justify-center md:justify-end gap-x-10  text-black hover:text-black md:order-2">
          <div className="flex pb-1px w-fit">
            <Link to="/" className="text-sm font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Projects
            </Link>
          </div>
          <div className="flex w-fit  ">
            <Link to="/about" className="text-sm font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>
              About
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
