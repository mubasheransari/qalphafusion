import { Logo } from "./logo";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="grid items-center gap-5 py-9 md:grid-cols-3">
        <Logo />
        <p className="text-[11px] text-muted md:text-center">
          Innovation &amp; excellence, personalised.
        </p>
        <p className="text-[11px] text-muted md:text-right">
          © 2026 Alpha Fusion Ltd
        </p>
      </Container>
    </footer>
  );
}
