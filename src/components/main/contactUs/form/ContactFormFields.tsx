import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import React from "react";
import { useFormContext } from "react-hook-form";

const ContactFormFields = () => {
  const {
  } = useFormContext();

  return (
    <>
      <Input label="Name" name="name" placeholder="Enter your name" />
      <Input
        label="Phone No."
        name="phone"
        placeholder="Enter your phone number"
      />
      <Input
        label="Email"
        name="email"
        placeholder="Enter your email address"
      />
      <Input
        label="Subject"
        name="subject"
        placeholder="Enter subject here"
      />
      <Textarea
        label="Message"
        name="message"
        placeholder="Enter your message here..."
      />
    </>
  );
};

export default ContactFormFields;
