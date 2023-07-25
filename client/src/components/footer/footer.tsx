const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-500 text-center p-4">
      &copy; {currentYear} Fatima Zahra
    </footer>
  );
};

export default Footer;
