export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Let's Connect
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          Have a project, opportunity or just want to connect? Feel free to
          reach out.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">Email</p>
            <a
              href="mailto:YOUR_EMAIL"
              className="mt-2 block text-sm text-zinc-300 transition-colors hover:text-white"
            >
              faikpatel844@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Phone</p>
            <a
              href="tel:YOUR_PHONE"
              className="mt-2 block text-sm text-zinc-300 transition-colors hover:text-white"
            >
              +91 7718006211
            </a>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Location</p>
            <p className="mt-2 text-sm text-zinc-300">Mumbai, India</p>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Faik Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
