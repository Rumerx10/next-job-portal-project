"use client"
import React from "react";
import Image from "next/image";
import ContactForm from "./form/ContactForm";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-20 overflow-hidden">
      <div className="w-full lg:container mx-auto">
        {" "}
        <div className="flex flex-col w-full">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Contact Us
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="h-1 w-36 bg-red-600 my-7" />
          </h1>
          <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-textGray text-lg">
            We are committed to providing exceptional service and support.
            Whether you have <br /> inquiries, need expert guidance, or are
            looking to collaborate
          </motion.p>
          <div className="flex flex-col lg:flex-row w-full gap-12 mt-10 lg:mt-20">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="w-full hidden lg:flex items-center justify-center lg:w-6/12">
              <Image
                src="/s.webp"
                alt=""
                height={906}
                width={738}
                className="object-cover w-full"
              />
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="w-full lg:w-6/12 bg-cardGray">
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default ContactUs;
