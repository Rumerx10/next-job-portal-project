import React from 'react';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';

// InputField component now using Controller
type InputFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  validation?: any;
  rows?: number;
};

const InputField: React.FC<InputFieldProps> = ({ name, label, placeholder, type = 'text', validation, rows }) => {
  const { control } = useFormContext(); // Get control from context
  const isTextarea = type === 'textarea';

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={validation} // Pass validation rules to Controller
        defaultValue="" // Set a default value, important for controlled components
        render={({ field, fieldState: { error } }) => (
          <>
            {isTextarea ? (
              <textarea
                {...field} // Spread field props (onChange, onBlur, value, name, ref)
                id={name} // Keep id for label association
                placeholder={placeholder}
                rows={rows || 4}
                className={`mt-1 block w-full px-3 py-2 bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400`}
              />
            ) : (
              <input
                {...field} // Spread field props
                type={type}
                id={name} // Keep id for label association
                placeholder={placeholder}
                className={`mt-1 block w-full px-3 py-2 bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400`}
              />
            )}
            {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

// ContactForm component using useFormContext
interface ContactFormData {
  yourName: string;
  yourEmail: string;
  subject: string;
  yourMessage: string;
}

const ContactForm = () => {
  // Get handleSubmit, reset, and formState from useFormContext
  const { handleSubmit, reset, formState: { errors, isSubmitting } } = useFormContext<ContactFormData>();

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    console.log('Form Data:', data);
    // Alert the submitted data
    // Using JSON.stringify to make the object readable in the alert
    alert(`Message Sent!\n\nData:\n${JSON.stringify(data, null, 2)}`);

    // Simulate API call
    await new Promise<void>(resolve => setTimeout(resolve, 1000));

    // Reset the form fields to their defaultValues
    reset();
    // Optionally, you can provide new default values to reset:
    // reset({ yourName: '', yourEmail: '', subject: '', yourMessage: '' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4 sm:p-6 lg:p-8 bg-white shadow-xl rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Leave your thought here</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="yourName"
          label="Your Name"
          placeholder="Your Name*"
          validation={{ required: 'Your name is required.' }}
          // errors prop is no longer needed here as Controller handles its own field error
        />
        <InputField
          name="yourEmail"
          label="Your Email"
          type="email"
          placeholder="Your Email*"
          validation={{
            required: 'Your email is required.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address.',
            },
          }}
        />
      </div>

      <InputField
        name="subject"
        label="Subject"
        placeholder="Subject*"
        validation={{ required: 'Subject is required.' }}
      />

      <InputField
        name="yourMessage"
        label="Your Message"
        type="textarea"
        placeholder="Write your message..."
        validation={{ required: 'Message is required.' }}
        rows={5}
      />

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto flex justify-center py-2.5 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

// Main App component to provide the FormContext
export default function App() {
  // Initialize react-hook-form methods
  const methods = useForm<ContactFormData>({
    mode: 'onBlur', // Validate on blur
    defaultValues: { // These values will be used when form is reset
        yourName: '',
        yourEmail: '',
        subject: '',
        yourMessage: ''
    }
  });

  return (
    // Provide the form methods to all child components
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col justify-center items-center font-inter">
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </FormProvider>
  );
}
