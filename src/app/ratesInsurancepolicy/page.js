import CancellationPolicy from '@/components/RatesAndInsurance/CancellationPolicy/Cancellationpolicy'
import InsurancePaymentSection from '@/components/RatesAndInsurance/InsurancePaymentSection/InsurancePaymentsection'
import RatesAndInsurancePolicyBanner from '@/components/RatesAndInsurance/PolicyBannerSection/PolicyBannersection'
import React from 'react'

const ratesInsurancepolicy = () => {
  return (
    <>
    <RatesAndInsurancePolicyBanner/>
    <InsurancePaymentSection/>
<CancellationPolicy/>
    </>
  )
}

export default ratesInsurancepolicy
