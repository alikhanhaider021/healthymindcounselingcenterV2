import FindTherapistGuide from '@/components/services/findtherapistguide/FindTherapistGuide'
import MentalHealthProvider from '@/components/services/mentalhealthprovider/MentalHealthProvider'
import ServicesBanner from '@/components/services/ServicesBanner/ServicesBanner'
import TherapistRateInfo from '@/components/services/therapistratesinfo/TherapistRatesInfo'
import TypesOfTherapists from '@/components/services/typesoftherapists/TypesOfTherapists'
import WhyTherapy from '@/components/services/whytherapy/WhyTherapy'
import ZipSection from '@/components/services/zipsection/ZipSection'
import WhatWeDo from '@/components/services/servicesoverview/ServicesOverview'

import React from 'react'
import EMDRSection from '@/components/services/EMDRsection/EMDRSection'

const services = () => {
  return (
<>
<ServicesBanner/>
<MentalHealthProvider/>
<TypesOfTherapists/>
<FindTherapistGuide/>
<TherapistRateInfo/>
<WhyTherapy/>
<ZipSection/>
<WhatWeDo/>
<EMDRSection/>
</>
  )
}

export default services
