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
import PersonCenteredTherapy from '@/components/services/personcenteredtherapy/PersonCenteredTherapy'
import SolutionFocusedTherapy from '@/components/services/solutionfocusedtherapy/SolutionFocusedTherapy'
import CognitiveBehavioralTherapy from '@/components/services/cognitivebehavioraltherapy/CognitiveBehavioralTherapy'
import TraumaInformedTherapy from '@/components/services/traumaInformedtherapy/TraumaInformedTherapy'
import MillennialsSection from '@/components/services/millennials/Millennials'

import LGBTQIASection from '@/components/services/LGBTQIa/LGBTQIA'
import VegansSection from '@/components/services/vegans/Vegans'
import SpiritualCounselingSection from '@/components/services/spiritualcounseling/Spiritualcounseling'
import POCSection from '@/components/services/poc/POC'
import HoursOfOperation from '@/components/services/cardtable/CardTable'
import EvaluationsReferrals from '@/components/services/referrals/Referrals'
import MentalhealthproviderSlider from '@/components/MentalhealthproviderSlider/MentalhealthproviderSlider'
import GenzSection from '@/components/services/genz/Genz'

const services = () => {
  return (
<>
<ServicesBanner/>

<MentalhealthproviderSlider/>
<TypesOfTherapists/>
<FindTherapistGuide/>
<TherapistRateInfo/>
<WhyTherapy/>
<ZipSection/>
<WhatWeDo/>
<EMDRSection/>
<PersonCenteredTherapy/>
<SolutionFocusedTherapy/>
<CognitiveBehavioralTherapy/>
<TraumaInformedTherapy/>
<MillennialsSection/>

<GenzSection/>
<LGBTQIASection/>
<VegansSection/>
<SpiritualCounselingSection/>
<POCSection/>
<EvaluationsReferrals/>
<HoursOfOperation/>
</>
  )
}

export default services
