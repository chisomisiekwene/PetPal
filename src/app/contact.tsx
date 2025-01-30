'use client'
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "@/Components/ui/button";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<FormValues>({ mode: "onChange" }); // Ensure the form is checked on every change

  // Watch form values to track changes
  const values = watch();

  const sendEmail = (data: FormValues) => {
    const serviceID = "service_54mapto";
    const templateID = "template_z6ux2ad";
    const userID = "6zI6CfM15dEtHBATr";

    emailjs
      .send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send message, please try again.");
      });
  };

  return (
    <div
      className="bg-gradient-to-br from-secondary to-white text-black md:px-[80px] md:py-[110px] px-[30px] py-10 flex flex-col gap-6 justify-center items-center"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-center text-xl md:text-3xl">
          GET IN TOUCH
        </h1>
        <p className="font-medium capitalize text-base md:text-xl text-gray-800 text-center">
          We are just a message away from working with you
        </p>
      </div>
      <div className="max-w-[900px] w-full md:p-10">
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col gap-8 md:gap-9"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-3">
            <label className="font-medium text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="p-4 border border-gray-400 outline-none rounded-lg"
              placeholder="Enter your name"
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-3">
            <label className="font-medium text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="p-4 border border-gray-400 outline-none rounded-lg"
              placeholder="Enter your email"
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-3">
            <label className="font-medium text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="h-40 p-4 border border-gray-400 rounded-lg outline-none resize-none"
              id="message"
              placeholder="Your message here"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              disabled={!isValid} // Disable until the form is valid
              type="submit"
              className={`cursor-pointer bg-accent text-white hover:scale-105 transition ease-out duration-500 font-[500] text-lg py-6 px-7 rounded-lg flex items-center justify-center ${
                !isValid ? "shadow-lg opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {/* You can customize loading or spinner here if needed */}
              {"Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
