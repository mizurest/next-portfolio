const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="font-thin flex text-xxs h-16 items-center justify-center">
      Copyright © {year} Kosuke Koizumi All rights reserved.
    </footer>
  );
}

export default Footer;