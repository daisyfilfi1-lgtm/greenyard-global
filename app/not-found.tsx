import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#F7F4EF] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <span className="text-[120px] font-light text-[#D4AF37] leading-none select-none">404</span>
        <h1 className="text-3xl font-semibold text-[#0D0D0D] mt-4 mb-3">Page Not Found</h1>
        <p className="text-[#6B6B6B] mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#D4AF37] text-[#1A1A1A] font-medium text-sm hover:bg-[#E8D58A] transition-all rounded-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-[#E5E0D8] text-[#0D0D0D] font-medium text-sm hover:border-[#D4AF37] transition-all rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
