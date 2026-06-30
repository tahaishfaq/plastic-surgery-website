import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found | Rahman Plastic Surgery",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[60vh] items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">404</p>
          <h1 className="mt-5 font-instrument text-4xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-base leading-7 text-brand-body">
            The page you are looking for may have moved or is not yet available.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/">Home</Button>
            <Button href="/featured-procedures" variant="outline">
              Procedures
            </Button>
            <Button href="/contact" variant="outline">
              Contact
            </Button>
          </div>
          <p className="mt-8 text-sm text-brand-muted">
            Need help now?{" "}
            <Link className="font-medium text-brand-ink underline-offset-4 hover:underline" href="/contact">
              Contact the clinic
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
