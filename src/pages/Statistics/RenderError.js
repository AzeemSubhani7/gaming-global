// Libraries
import React from "react";
import { Transition } from "@headlessui/react";

const RenderError = () => {
  return (
    <Transition
      show
      enter="transition-all ease-in-out duration-700 transform"
      enterFrom="opacity-0 translate-y-full"
      enterTo="translate-y-0 opacity-100"
      leave="transition-all ease-in-out duration-700 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
    >
      <div className="p-10 bg-primary-light rounded-lg">
        <h1 className="text-xl text-center font-semibold text-secondary">
          Oops! These was an Error while Fetching the Statistics.
        </h1>
      </div>
    </Transition>
  );
};

export default RenderError;
