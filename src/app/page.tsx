"use client"; // Add this line to mark the component as a client component

import Image from "next/image";

import Link from "next/link";
import image1 from "../app/images/Image.jpg";
import image2 from "../app/images/hmtll.png";
import image3 from "../app/images/css 1.png";
import image4 from "../app/images/js.png";
import image5 from "../app/images/next1.png";
import image6 from "../app/images/ts.png";
import image7 from "../app/images/react.png";
import image8 from "../app/images/Seerat1.jpeg";
import image9 from "../app/images/builder1.jpeg";
import image10 from "../app/images/blog1.jpeg";
import image11 from "../app/images/Image.jpg"


import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu open/close state
  };

  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can call your backend API to send the message
    console.log(formData); // For now, log the form data to console
    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main className="bg-gradient-to-br from-fuchsia-100 to-pink-200 text-white min-h-screen">
    

  
  
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-4 md:px-10 bg-gradient-to-r from-fuchsia-800 to-fuchsia-800   shadow-lg">
        <div className="text-3xl font-bold text-blue-100 font-serif">HareemN.</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <span>&times;</span> // Close icon
            ) : (
              <span>&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute top-16 left-0 w-full text-xl font-serif bg-slate-800 md:bg-transparent md:static md:flex justify-end gap-6 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-10`}
        >
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block md:inline-block py-4 md:py-0 text-center hover:text-gray-400 transition-colors duration-300 text-white font-bold"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="about" className="flex flex-col md:flex-row gap-20 items-center mt-10 px-4 md:px-10">
        {/* Left side */}
        <div className="flex-1 text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-4xl text-sky-900 font-serif transition-colors duration-300 hover:text-pink-800">
  Hi, I’m Hareem Jaweid
</h1>


          <p className="text-base md:text-lg text-gray-900 mt-4 font-bold transition-colors duration-300 hover:text-blue-700">
  I'm a passionate Front End Developer currently honing my skills at
  GIAIC. On the front-end, I've mastered Next.js and Tailwind CSS,
  creating responsive and dynamic user interfaces. As I continue my
  journey, I’m diving deeper into back-end technologies to build

  comprehensive, full-stack applications. Stay tuned as I continue to
  expand my skill set and bring innovative ideas to life!
</p>

          <br />
          <br />
          <a
  href="https://photos.google.com/photo/AF1QipOmJH2RIdgEl0gLqsF11hrgeNak0hpPHsWRo1UT" // Replace with the actual path to your image
  download // This enables the download functionality
  className="bg-white text-black font-bold py-3 px-4 md:px-6 mt-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
>
  Download Resume
</a>

        </div>

        {/* Right Side */}
        <div className="flex-1">
  <Image
    width={300}
    height={300}
    className="max-w-full h-auto transition-transform duration-300 ease-in-out hover:scale-90"
    src={image1}
    alt="Abstract background"
  />
</div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 md:px-10 bg-transparent">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white font-serif bg-fuchsia-800">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
          {[
            { src: image2, alt: "HTML" },
            { src: image3, alt: "CSS" },
            { src: image4, alt: "JavaScript" },
            { src: image5, alt: "Next.js" },
            { src: image6, alt: "TypeScript" },
            { src: image7, alt: "React" },
          ].map((skill) => (
            <div className="flex flex-col items-center" key={skill.alt}>
              <Image src={skill.src} alt={skill.alt} width={60} height={60} />
              <p className="text-blue-900 mt-4 font-bold">{skill.alt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
     

<section id="projects" className="py-16 px-4 md:px-10 bg-transparent">
  <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white font-serif bg-fuchsia-800">
    Projects
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        src: image8,
        title: "Project 1",
        desc: "Seerat-un-Nabi Website (HTML CSS)",
        link: "https://html-css-website-seerat.vercel.app/"
      },
      
      {
        src: image10,
        title: "Project 2",
        desc: "Blog Website (Next.js)",
        link: "https://blog-website-nextjs-flax.vercel.app"
      },
      {
        src: image9,
        title: "Project 3",
        desc: "Builder Construction Website (HTML CSS)",
        link: "https://builder-website-html-css.vercel.app/"
      },
    ].map((project) => (
      <div
        key={project.title}
        className="bg-gradient-to-br from-fuchsia-300 to-fuchsia-300 text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
      >
        <center><Image src={project.src} width={400} height={200} className="rounded-lg mb-4" alt={project.title} /></center>
        <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-900 font-serif">{project.title}</h3>
        <p className="text-gray-800 mb-4 font-bold">{project.desc}</p>
        <Link href={project.link} passHref>
          <center><button className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
            View Project
          </button></center>
        </Link>
      </div>
    ))}
  </div>
</section>


      <br />
      <br />


      
        {/* Contact Form */}
      <section id= "contact" className="py-16 px-4 md:px-10 bg-fuchsia-100">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white font-serif bg-fuchsia-800">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto  bg-fuchsia-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white font-bold mb-2 ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-white font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-pink-100 text-black font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full"
          >
            Send Message
          </button>
        </form>
      </section>
  

          {/* Footer Section */}
          <footer className="bg-gradient-to-r from-fuchsia-800 to-fuchsia-900 font-bold text-white mt-10 py-8 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif underline">
            Why You Should Hire Me:

            </h3>
            <p className="text-gray-200">
            I’m dedicated to delivering tailored, high-quality solutions with a focus on clear communication and collaboration.


            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif underline">
              Email Adress
            </h3>
            <p className="text-gray-200 mb-4">Email: hareemjaweid@example.com</p>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif underline">
              Phone Number
            </h3>
            <p className="text-gray-200 mb-4"> +9203340001112</p>
            
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif underline">
             Socials links
            </h3>
            
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/hareem-jaweid-4ab2102bb/"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-gray-200 font-bold"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/wuEzeX2f8oR9pjrS/"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-gray-200 font-bold"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/hareem_jaweid"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-gray-200 font-bold"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
    

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-100">
          © {new Date().getFullYear()} Hareem. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}