import Link from "next/link";
interface ThankYouPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ThankYouPage({
  params,
}: ThankYouPageProps) {
  const { slug } = await params;

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-[#052557] mb-4">
          Thank You!
        </h1>

        <p className="text-lg text-gray-600 mb-2">
          Your inquiry has been submitted successfully.
        </p>

        <p className="text-gray-500">
          One of our team members will contact you sortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-[#052557] px-6 py-3 mt-3 text-white transition hover:bg-[#041f42]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}