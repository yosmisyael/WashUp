"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full rounded-md border border-gray-200 px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200",
        props.className
      )}
    />
  );
}
