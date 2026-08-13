import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { ExecutiveSummary } from './components/ExecutiveSummary'
import { ContextSection } from './components/ContextSection'
import { ValueProp } from './components/ValueProp'
import { ProgramEcosystem } from './components/ProgramEcosystem'
import { CurriculumSection } from './components/CurriculumSection'
import { FeatureModules } from './components/FeatureModules'
import { VACPortfolio } from './components/VACPortfolio'
import { HandsOnModel } from './components/HandsOnModel'
import { ProjectGallery } from './components/ProjectGallery'
import { SupportEcosystem } from './components/SupportEcosystem'
import { PlanningEcosystem } from './components/PlanningEcosystem'
import { CommercialsSection } from './components/CommercialsSection'
import { ClosingSection } from './components/ClosingSection'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-primary-900 text-slate-100 font-sans selection:bg-accent-500 selection:text-white flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <ExecutiveSummary />
        <TrustStrip />
        <ContextSection />
        <ValueProp />
        <ProgramEcosystem />
        <CurriculumSection />
        <FeatureModules />
        <VACPortfolio />
        <HandsOnModel />
        <ProjectGallery />
        <SupportEcosystem />
        <PlanningEcosystem />
        <CommercialsSection />
        <ClosingSection />
      </main>
    </div>
  )
}

export default App
