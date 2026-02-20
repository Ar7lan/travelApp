import PackageCard from '../components/packages/PackageCard'
import SectionHeading from '../components/ui/SectionHeading'
import { packages } from '../data/packages'

export default function PackagesPage() {
  return (
    <section className="py-10">
      <SectionHeading title="Tour Packages" description="Choose from our most popular adventures, ready to book today." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </section>
  )
}
