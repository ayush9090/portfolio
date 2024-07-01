import React from "react";
import "./contact.css";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const handleSubmit = (e) => {
  e.preventDefault();
};
const Contact = () => {
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xlfont-bold tracking-tight  sm:text-4xl">
          <p>Feel free to schedule a meeting with me:</p>
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600"></p>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <a
          href="https://calendly.com/avariyava/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Schedule meeting
        </a>
      </div>
    </div>
  );
};

export default Contact;
