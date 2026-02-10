export default function Contact() {
  return (
    <section id="contact" className="py-[150px] px-[60px] text-center">
      <h2 className="text-[60px] mb-[30px]">Let&apos;s Connect</h2>
      <p className="text-[18px] text-muted mb-[40px]">Have a project or opportunity? Get in touch.</p>
      <a 
        href="mailto:lerandomnomad@gmail.com" 
        className="text-[40px] text-accent no-underline border-b-2 border-transparent transition-border duration-300 hover:border-accent"
      >
        lerandomnomad@gmail.com
      </a>
    </section>
  );
}
