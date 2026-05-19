import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | JKKN Dental College & Hospital",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: "#FBFBEE" }}
    >
      <div className="text-center max-w-lg">
        <p
          className="text-8xl font-bold mb-4"
          style={{ color: "#7cb983" }}
        >
          404
        </p>
        <h1
          className="text-2xl font-semibold mb-3"
          style={{ color: "#006837" }}
        >
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg font-medium text-white transition-colors"
            style={{ backgroundColor: "#7cb983" }}
          >
            Go to Homepage
          </Link>
          <Link
            href="/admissions"
            className="px-6 py-3 rounded-lg font-medium border transition-colors"
            style={{ borderColor: "#006837", color: "#006837" }}
          >
            Admissions
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-medium border transition-colors"
            style={{ borderColor: "#006837", color: "#006837" }}
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-10 text-sm text-gray-500">
          JKKN Dental College &amp; Hospital, Komarapalayam
        </p>
      </div>
    </div>
  );
}
