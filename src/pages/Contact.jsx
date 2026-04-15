import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    setTimeout(() => {
      setLoading(false);
      setStatus("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const inputStyle =
    "w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none";

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-8"
      >
        {/* LEFT */}
        <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Have questions? We’d love to hear from you.
          </p>

          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>📍 Gurgaon, India</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 ecom@gmail.com</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-6 dark:text-white">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className={inputStyle}
              required
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className={inputStyle}
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className={`${inputStyle} h-28`}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-green-500">{status}</p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;