const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="p-8 pb-16 bg-(--color-neutral-800) text-center grid gap-4">
      <p>©{date} Caitlin Teague Doerr</p>
      <p>
        To contact owner/developer,{" "}
        <a href="mailto:design@caitlinteague.com" className="link">
          send an email
        </a>{" "}
        to <span className="font-bold">design@caitlinteague.com</span>
      </p>
      <p>
        <a href="//caitlinteague.com/builds" className="link">
          View more projects in Caitlin's portfolio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
