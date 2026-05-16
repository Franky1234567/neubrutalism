import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/Franky1234567" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/frankyrifdulmannan/" },
  { label: "Email", href: "mailto:frengkyrifdulm@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#e9e2d2] w-full border-t-4 border-[#1e1c12] flex flex-col md:flex-row justify-between items-center gap-6 px-8 py-12">
      <div className="flex items-center gap-4 text-[#1e1c12]">
        <span className="font-[family-name:var(--font-space-grotesk)] font-black uppercase bg-[#ffe34f] px-2 py-1 border-2 border-[#1e1c12]">
          Franky
        </span>
        <span className="font-[family-name:var(--font-inter)]">
          © 2026 - Engineered with attitude
        </span>
      </div>

      <ul className="flex flex-wrap gap-6 items-center">
        {socials.map((s) => (
          <li key={s.label}>
            <Link
              href={s.href}
              className="font-[family-name:var(--font-space-mono)] text-sm text-[#4b4734] uppercase hover:text-[#113ce5] hover:underline decoration-2 underline-offset-4 transition-colors"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}