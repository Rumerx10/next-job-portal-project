import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const Textarea = ({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <div>
            <textarea
              rows={6}
              {...field}
              value={field.value ?? ""}
              placeholder={placeholder}
              className="resize-none rounded-lg p-5 shadow w-full bg-white"
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">
              {String(errors[name]?.message)}
              </p>
            )}
            </div>
        )}
      />
    </div>
  );
};

export default Textarea;
