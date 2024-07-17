const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="font-thin flex text-xxs h-16 items-center justify-center">
      <p className="opacity-50">Copyright © {year} Kosuke Koizumi All rights reserved.</p>
      
    </footer>
  );
}

export default Footer;