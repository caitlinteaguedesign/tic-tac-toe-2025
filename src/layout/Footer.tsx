function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="p-10 pb-16 bg-gray-800 text-white text-center grid gap-4">
      <p>©{date} Caitlin Teague Doerr</p>
      <p>
        To contact owner/developer, send an email to{" "}
        <a
          href="mailto:design@caitlinteague.com"
          className="underline text-(--color-primary-100)"
        >
          design@caitlinteague.com
        </a>
      </p>
      <p>
        <a
          href="//caitlinteague.com/builds"
          className="underline text-(--color-primary-100)"
        >
          View more projects in Caitlin's portfolio
        </a>
      </p>
    </footer>
  );
}

export default Footer;
