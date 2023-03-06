import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.min.css";
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_USER_ID;

type FormData = {
  senderName: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Destructure data object
    const { senderName, email, subject, message } = data;
    try {
      const templateParams = {
        senderName,
        email,
        subject,
        message,
      };

      await emailjs.send(serviceId!, templateId!, templateParams, userId!);

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
      console.log(serviceId);
    }
  };

  return (
    <section>
      <h1 className="scroll-frm-head">
        <Link href="#" id="contactMe"></Link>CONTACT ME
      </h1>
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="contactForm">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  {/* Row 1 of form */}
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        {...register("senderName", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Name"
                      ></input>
                      {errors.senderName && (
                        <span className="errorMessage">
                          {errors.senderName.message}
                        </span>
                      )}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className="form-control formInput"
                        placeholder="Email address"
                      ></input>
                      {errors.email && (
                        <span className="errorMessage">
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Please enter a subject",
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Subject"
                      ></input>
                      {errors.subject && (
                        <span className="errorMessage">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        {...register("message", {
                          required: true,
                        })}
                        className="form-control formInput"
                        placeholder="Message"
                      ></textarea>
                      {errors.message && (
                        <span className="errorMessage">
                          Please enter a message
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
