const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="font-thin flex text-xxs h-20 items-center justify-center">
      <p className="opacity-50">Copyright © {year} mizurest All rights reserved.</p>
      
    </footer>
  );
}

export default Footer;