export default function GoogleMap() {
  return (
    <div className="w-full h-[500px]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957518.3719113996!2d71.702063578125!3d20.37026359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce3604380f73%3A0x9ebbdb883c29600!2sRR%20DESIGNS!5e0!3m2!1sen!2sin!4v1755759767342!5m2!1sen!2sin"
        width="50%"
        height="80%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       <div>
            <h1>Contact Us</h1>
            <p>Phone: +91 97256 78468</p>
            <p>Email:
            </p>
            <p>Address: OFFICE NO -322, 3rd Floor, Pramukh Orbit, Near Mahavir Nagar, N.H.No -48, Vapi -396191</p>
        </div>
    </div>
  );
}