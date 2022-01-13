function Contact({ name }) {
  return (
    <button className="flex items-center space-x-3 mb-3">
      <img src="/noman.png" className="h-8 w-8 rounded-full" alt="" />
      <p className="text-gray-800 font-medium">{name}</p>
    </button>
  );
}

export default Contact;
