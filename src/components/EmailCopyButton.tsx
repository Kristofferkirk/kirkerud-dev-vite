import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EmailCopyButton = () => {
  const defaultValue = "kristoffer@kirkerud.dev";
  const [showCopyMessage] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(defaultValue);
  return (
    <>
      <div className="flex items-center justify-center w-100">
        <input
          id="email-contact"
          type="text"
          className="p-2 center-align text-center rounded-sm"
          readOnly
          placeholder="kristoffer@kirkerud.dev"
          value={inputValue}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(
              "#email-contact"
            ) as HTMLInputElement;
            element?.select();
            document.execCommand("copy", false, "kristoffer@kirkerud.dev");
            setInputValue("Copied!");
            window.setTimeout(() => {
              setInputValue(defaultValue);
            }, 1000);
          }}
          className="bg-blue-400 text-white p-2 w-10 rounded-md"
          id="email-copy"
          type="button"
        >
          <FontAwesomeIcon size="lg" icon={faCopy} />
        </button>
      </div>
      {showCopyMessage && <p className="text-center">Copied</p>}
    </>
  );
};

export default EmailCopyButton;
