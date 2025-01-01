import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'Github',
    href: 'https://github.com/Trangvu801',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/trang-vu-4126b123b',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/the.beazz/',
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background Decoration */}
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2
        -translate-x-1/2 bg-emerald-300/30
        [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>

          {/* Links */}
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};