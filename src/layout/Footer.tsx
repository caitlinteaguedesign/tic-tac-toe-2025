const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="p-10 pb-16  bg-(--color-neutral-800) text-center grid gap-4">
      <p>©{date} Caitlin Teague Doerr</p>
      <p>
        To contact owner/developer, send an email to{" "}
        <a href="mailto:design@caitlinteague.com" className="link">
          design@caitlinteague.com
        </a>
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
