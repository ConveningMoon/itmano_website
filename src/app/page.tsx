import { HeroSection } from '@/components/home/HeroSection'
import { GradientDivider } from '@/components/ui/GradientDivider'
import { PainSection } from '@/components/home/PainSection'
import { FCISection } from '@/components/home/FCISection'
import { FounderSection } from '@/components/home/FounderSection'
import { ProofSection } from '@/components/home/ProofSection'
import { FilterSection } from '@/components/home/FilterSection'
import { CTASection } from '@/components/home/CTASection'
import { LeadMagnetSection } from '@/components/home/LeadMagnetSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CTASection />
      <GradientDivider />
      <FCISection />
      <PainSection />  
      <ProofSection />
      <FilterSection />
      <LeadMagnetSection />
      <FounderSection />
    </>
  )
}
