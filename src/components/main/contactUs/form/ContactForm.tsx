"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./Schema";
import ContactFormFields from "./ContactFormFields";
import toast from "react-hot-toast";
import { ScaleLoader } from "react-spinners";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      toast.success(`Email sent successfully !`);
      console.log(`Status: Message sent successfully!`);
      methods.reset();
    } catch (error) {
      toast.error(`Failed to send email. Error: `);
      console.log(`${error}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-4 h-full px-8 py-10 bg-primaryBlue rounded-lg shadow-lg"
      >
        <ContactFormFields />
        <button
          type="submit"
          disabled={isSending}
          className="flex items-center justify-center bg-bgBlue hover:bg-white hover:text-primaryBlue  text-center duration-300 active:scale-95 cursor-pointer w-full font-bold text-white px-4 py-2 rounded-lg border-2"
        >
          {isSending ? <ScaleLoader height={20} /> : "Send Message"}
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
