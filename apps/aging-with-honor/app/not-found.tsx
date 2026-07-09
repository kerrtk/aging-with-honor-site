import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10 text-teal" />
        </div>

        {/* 404 */}
        <h1 className="font-playfair text-8xl font-bold text-teal/20 leading-none mb-4">
          404
        </h1>

        {/* Heading */}
        <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="font-lato text-charcoal/70 text-lg mb-8 leading-relaxed">
          We couldn&apos;t find the page you&apos;re looking for. It may have
          moved or no longer exists. Let&apos;s get you back on the right path.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-full font-lato font-semibold hover:bg-teal-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/caregiver-resources"
            className="inline-flex items-center gap-2 border-2 border-teal text-teal px-6 py-3 rounded-full font-lato font-semibold hover:bg-teal/5 transition-colors"
          >
            Caregiver Resources
          </Link>
        </div>

        {/* Tagline */}
        <p className="font-playfair italic text-charcoal/50 text-sm mt-10">
          &ldquo;Plan Today. Honor Tomorrow. Leave a Legacy of Love.&rdquo;
        </p>
      </div>
    </div>
  )
}
