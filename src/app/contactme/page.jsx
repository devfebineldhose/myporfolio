"use client";
import Input from "@/components/Input";
import { useCallback, useState } from "react";

export default function ContactMe() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [_error, setError] = useState({});
  const _onChange = useCallback(
    (type, _data) => {
      setData((e) => ({ ...e, [type]: _data }));
    },
    [data, setData]
  );
  const _validation = useCallback(
    (e) => {
      const isEmpty = (Obj) => {
        Object.keys(Obj).map((e) => {
          setError((f) => ({
            ...f,
            [e]: Obj[e] === "" ? "This field should not be empty" : null,
          }));
        });
      };
      isEmpty(data);
    },
    [_error, setError, data]
  );
  return (
    <div className="h-screen flex px-16 flex-col align-center">
      <h1 className="text-3xl self-center my-20">Contact Me</h1>
      <form
        // method="POST"
        action={_validation}
        className="w-full self-center lg:w-8/12"
      >
        <div className="flex flex-col gap-2 mb-4">
          <label>First Name</label>
          <Input
            type="text"
            isErrorEnabled={true}
            errorMessage={_error.firstname}
            placeholder="first name"
            value={data.firstname}
            className="pl-2 text-black rounded-sm"
            onChange={({ currentTarget: { value } }) =>
              _onChange("firstname", value)
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label>Last Name</label>
          <Input
            type="text"
            placeholder="last name"
            className="pl-2 text-black rounded-sm"
            isErrorEnabled={true}
            errorMessage={_error.lastname}
            onChange={({ currentTarget: { value } }) =>
              _onChange("lastname", value)
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label>Email Address</label>
          <Input
            type="text"
            placeholder="email"
            isErrorEnabled={true}
            errorMessage={_error.email}
            className="pl-2 text-black rounded-sm"
            onChange={({ currentTarget: { value } }) =>
              _onChange("email", value)
            }
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label>Message</label>
          <Input
            name="message"
            type="textArea"
            placeholder="type your message..."
            className="pl-2 text-black pt-1 h-32 rounded-md"
            isErrorEnabled={true}
            errorMessage={_error.message}
            onChange={({ currentTarget: { value } }) =>
              _onChange("message", value)
            }
          />
        </div>
        <button type="submit" className="bg-rose-300 rounded-md p-2 mt-20">
          Submit
        </button>
      </form>
    </div>
  );
}
