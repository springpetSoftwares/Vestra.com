import React from "react";
import MainLogo from "/mainlogo.png"
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1B2D] border-t border-text text-gray-300 px-8 md:px-[10%] py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Social */}
        <div className="flex flex-col gap-6 justify-center items-center">
             <div>
              <img
                height={200}
                width={200}
                src={MainLogo}
                alt="hero"
              />
              </div>

          <div className="flex gap-3">
  {[
    { name: "ig", link: "https://www.instagram.com/springpethomes" },
    { name: "tw", link: "https://x.com/springpethomes" },
    { name: "fb", link: "https://www.facebook.com/SpringpetHomes/" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white hover:text-black cursor-pointer transition"
    >
      {item.name}
    </a>
  ))}
</div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-[#F8F8F899] font-semibold mb-4">
            ABOUT VELSTRA
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">About the group</li>
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">
              Leadership and governance
            </li>
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">
              Our Purpose
            </li>
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">Our Team</li>
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h3 className="text-[#F8F8F899] font-semibold mb-4">
            PORTFOLIO
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">Real Estate</li>
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">Construction</li>
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">Agriculture</li>
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">Philanthropy</li>
            <li className="hover:text-white text-[#F8F8F899] cursor-pointer">
              Commercial Platforms
            </li>
          </ul>
        </div>

        {/* Office Location */}
        <div>
          <h3 className="text-[#F8F8F899] font-semibold mb-4">
            OFFICE LOCATION
          </h3>

          <ul className="space-y-3 text-sm">

            {/* Address → Google Maps */}
            <li>
              <a
                href="https://www.google.com/maps?q=25B+Ikota+Villa+Estate+Lekki+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-[#F8F8F899]"
              >
                25B Ikota Villa, Beside Mega Chicken, Lekki, Lagos
              </a>
            </li>

            {/* Phone */}
            <li>
              <a
                href="tel:+2348133976618"
                className="hover:text-white text-[#F8F8F899]"
              >
                +234 813 397 6618
              </a>
            </li>

            <li>
              <a
                href="tel:+2349130467345"
                className="hover:text-white text-[#F8F8F899]"
              >
                +234 913 046 7345
              </a>
            </li>

            {/* Time */}
            <li className="hover:text-white text-[#F8F8F899]">Mon - Sat: 09:00 AM - 16:00 PM</li>
            <li className="hover:text-white text-[#F8F8F899]">Sunday: Closed</li>

            {/* Email */}
            <li>
              <a
                href="mailto:info@velstra.com"
                className="hover:text-white text-[#F8F8F899]"
              >
                info@velstra.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Velstra Holdings. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;