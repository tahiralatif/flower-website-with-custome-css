import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r bg-gray-100 text-gray-700 py-10 max-w-screen-xl mx-auto">
      <hr /><hr />
      <div className="container mx-auto flex flex-col items-center space-y-8">
        
        {/* Logo Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 p-1">{"𝑪𝒓𝒚𝒔𝒕𝒂𝒍 𝑭𝒍𝒐𝒘𝒆𝒓"}</h2>
          <p className="text-sm text-black">Bringing beauty to your life with our exquisite flowers.</p>
        </div>

        {/* Navigation Links (excluding Home, About, Contact) */}
        <nav className="flex flex-wrap justify-center gap-6 text-black font-medium">
          <a className="hover:text-cyan-300 transition-colors duration-200" href="#">Delivery</a>
          <a className="hover:text-cyan-300 transition-colors duration-200" href="#">Privacy Policy</a>
          <a className="hover:text-cyan-300 transition-colors duration-200" href="#">Terms of Service</a>
        </nav>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com//tahira-rajput">
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61561036515275" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://x.com/TahiraRajput07" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="Twitter X" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://github.com/tahiralatif" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/25/25231.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center text-slate-900">
          <p>Contact us at: <a href="mailto:info@eleganceflowers.com" className="text-amber-700 hover:text-teal-800 font-semibold">info@eleganceflowers.com</a></p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Flower St, Blossom City, FL</p>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <p className="text-gray-900 font-medium mb-2">Subscribe to Our Newsletter</p>
          <form className="flex space-x-2 justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md border border-gray-500  text-black" required />
            <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-transform duration-200">Subscribe</button>
          </form>
        </div>

        {/* Copyright Notice */}
        <p className="text-center text-gray-900 font-medium mt-8">© 2024 Tahira Rajput. All Rights Reserved</p>
      </div>
    </footer>
  );
}
