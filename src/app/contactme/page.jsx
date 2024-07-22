import Image from "next/image";
import Link from "next/link";

export default function ContactMe() {
  return (
    <div className="h-screen flex px-16 flex-col align-center">
      {/* <Image
        alt="contact_me_img"
        height={100}
        width={100}
        src={"/contact_me_img.jpg"}
      /> */}
      <h1 className="text-3xl self-center my-20">Contact Me</h1>
      <form method="POST" action={""} className="w-3/6 self-center">
        <div className="flex flex-col gap-2 mb-4">
          <label>First Name</label>
          <input
            type="text"
            placeholder="first name"
            className="pl-2 text-black rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="last name"
            className="pl-2 text-black rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label>Email Address</label>
          <input
            type="text"
            placeholder="email"
            className="pl-2 text-black rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="type your message..."
            className="pl-2 text-black pt-1 h-32 rounded-md"
          />
        </div>
        <button type="submit" className="bg-rose-300 rounded-md p-2 mt-20">
          Submit
        </button>
      </form>
    </div>
  );
}
