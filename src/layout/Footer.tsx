function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="p-10 pb-16  bg-(--color-neutral-800) text-center grid gap-2">
      <p>©{date} Caitlin Teague Doerr</p>
      <p>
        To contact owner/developer, send an email to{" "}
        <a
          href="mailto:design@caitlinteague.com"
          className="underline text-(--color-interactive)"
        >
          design@caitlinteague.com
        </a>
      </p>
      <p>
        <a
          href="//caitlinteague.com/builds"
          className="underline text-(--color-interactive)"
        >
          View more projects in Caitlin's portfolio
        </a>
      </p>
    </footer>
  );
}

export default Footer;
