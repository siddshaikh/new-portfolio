import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <div className="footer">&copy; {currentYear} Sidd Shaikh</div>;
};

export default Footer;
