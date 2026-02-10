export default function Footer() {
  return (
    <footer className="px-[60px] py-[40px] border-t border-card flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Yashitha Mishra. All rights reserved.</p>
      <div className="social-links flex gap-[30px]">
        <a href="https://github.com/Sly-kitsune" className="text-muted text-[14px] transition-colors hover:text-accent">GitHub</a>
        {/* Add more: LinkedIn, etc. */}
      </div>
    </footer>
  );
}
