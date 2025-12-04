import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const Input = ({
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
      <label className="font-bold text-white">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            <input
              {...field}
              value={field.value ?? ""}
              placeholder={placeholder}
              className="rounded-lg px-5 shadow border-2 border-borderGray p-2 w-full bg-white"
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

export default Input;
