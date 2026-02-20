import { PrimaryButton, SecondaryButton } from '../ui/Button'

export default function PackageCard({ pkg }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{pkg.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{pkg.duration}</p>
      <p className="mt-4 text-sm text-slate-600">{pkg.details}</p>
      <p className="mt-4 text-xl font-bold text-slate-900">{pkg.price}</p>
      <div className="mt-4 flex gap-3">
        <PrimaryButton>Book Now</PrimaryButton>
        <SecondaryButton>View Details</SecondaryButton>
      </div>
    </article>
  )
}
