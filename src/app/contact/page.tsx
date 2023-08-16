'use client';
import React, { useState, useEffect, useRef } from 'react';
import { send } from '@emailjs/browser';
import Alert from '@/components/Alert';
import Error from '@/components/Error';

const initialState = {
  name: '',
  number: '',
  email: '',
  subject: '',
  message: '',
};

const Page = () => {
  const [contactState, setContactState] = useState(initialState);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [disabled, setDisabled] = useState("disabled");
  const [errorMessage, setMessage] = useState("");
  const phoneLength = useRef(0);

  useEffect(() => {
    setError(false);
    setAlert(false);
    setMessage("");
    setContactState(initialState);
  }, []);

  useEffect(()=> {
    console.log("changingstate")
    const formValues = Object.values(contactState);
    const allFieldsFilled = formValues.every((element) => element.length > 0);
    console.log(allFieldsFilled)
    console.log(contactState)
    if (allFieldsFilled) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  }, [contactState]);

  const handleChange = ({ target }: any) => {
    if (target.name === 'number') {
      if (target.value.length === 3 && phoneLength.current === 2) {
        target.value = target.value + '-';
      } else if (target.value.length === 7 && phoneLength.current === 6) {
        target.value = target.value + '-';
      } else if (target.value.length === 8 && phoneLength.current === 9) {
        target.value = target.value.slice(0, -1);
      } else if (target.value.length === 4 && phoneLength.current === 5) {
        target.value = target.value.slice(0, -1);
      } else if (target.value.length === 4 && phoneLength.current === 3) {
        target.value = target.value.slice(0, 3) + '-' + target.value.slice(3);
      } else if (target.value.length === 8 && phoneLength.current === 7) {
        target.value = target.value.slice(0, 7) + '-' + target.value.slice(7);
      }
    }
    setContactState({
      ...contactState,
      [target.name]: target.value,
    });
    phoneLength.current = target.value.length;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(contactState);
    setDisabled("disabled");
    if (
      contactState.name === '' ||
      contactState.email === '' ||
      contactState.message === '' ||
      contactState.subject === '' ||
      contactState.number === ''
    ) {
      setError(true);
      setDisabled("");
      setMessage("All fields must be filled out");
      return;
    } else if (contactState.number.length !== 12) {
      setError(true);
      setDisabled("");
      setMessage("Please enter a 10 digit phone number");
      return;
    }
    send(
      'service_xizw2ks',
      'template_o7euysq',
      contactState,
      '0Ba_L7O57g4nYNiNY'
    ).then(
      (result: { text: any }) => {
        console.log(result.text);
        setAlert(true);
        setContactState(initialState);
      },
      (error: { text: any }) => {
        setError(true);
        setMessage(error.text);
        console.error(error.text);
      }
    );
  };

  return (
    <div>
      <div className="w-full bg-[#f5f5f5]">
        <h2 className="text-center py-2 mt-1">
          Call us at (580) 639-2849 or email us below
        </h2>
      </div>
      <div className="flex justify-center items-center mb-20">
        <div className=" w-full md:w-[80%] h-auto rounded-xl lg:p-4">
          <div className="p-4">
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2 ">Name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="name"
                    value={contactState.name}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2 ">
                    Phone Number
                  </label>
                  <input
                    maxLength={12}
                    onChange={handleChange}
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="number"
                    value={contactState.number}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2 ">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  name="email"
                  value={contactState.email}
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <select
                  onChange={({ target }) =>
                    setContactState({ ...contactState, subject: target.value })
                  }
                  value={contactState.subject}
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                >
                  <option value="">Select a subject</option>
                  <option value="Request a quote">Request a quote</option>
                  <option value="Request financing options">
                    Request financing options
                  </option>
                  <option value="General inquiry">General inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2 ">Message</label>
                <textarea
                  onChange={handleChange}
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows={10}
                  name="message"
                  value={contactState.message}
                />
              </div>
              <div className="justify-center flex">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!!disabled.length}
                  className="p-4 text-white bg-[#ff3f3f] hover:bg-[#d02230] active:scale-[.99] mt-4 disabled:opacity-20 disabled:scale-100"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {alert ? <Alert alert={alert} setAlert={setAlert} message="Your message has been sent!" /> : null}
      {error ? <Error error={error} setError={setError} message={errorMessage} /> : null}
    </div>
  );
};

export default Page;
