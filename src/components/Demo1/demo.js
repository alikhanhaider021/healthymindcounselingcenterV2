import React from 'react'
import './demo.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from 'next/image'
const Demo = () => {
  return (
   <>
   
       <div className="slides-wrapper">
             {/* Slide 1 - Services Section */}
             <div className="slide">
               <section className="services-section">
                 <div className="services-container">
                   <div className="services-content-wrapper">
                     <div className="services-text-block">
                       <p className="services-paragraph">
                         Mental health issues affect millions of Americans every year. If you or someone you love has experienced depression, anxiety, bipolar disorder, post-traumatic stress disorder (PTSD), obsessive-compulsive disorder (OCD) or other mental illnesses, you may want to consider seeking treatment from a professional counselor.
                       </p>
                       <p className="services-paragraph">
                         The National Institute of Mental Health estimates that nearly 20 percent of adults experience some form of mental illness at least once during their lifetime. In addition, approximately 40 million American children suffer from emotional disorders such as ADHD, OCD, PTSD, and depression.
                       </p>
                       <p className="services-paragraph">
                         Counseling services can provide support and guidance to those who struggle with these conditions. At Healthy Mind Counseling Center, our licensed counselors offer individual counseling sessions, group therapy, family counseling, and couples counseling.
                       </p>
   
                       <button className="services-cta-link" >
                         Click Here To Learn More About Our Services
                       </button>
                     </div>
   
                     <div className="services-image-block">
                       <div className="services-image-card">
                        <Image
  alt="Services image"
  className="services-image"
  src="/images/img2.jpg"
  width={1000}
  height={600} /* keep intrinsic ratio, Next/Image needs numbers */
  style={{ width: "100%", objectFit: "cover" }} /* remove fixed height */
  sizes="(max-width:1024px) 100vw, 50vw"
/>

                         {/* <Image
                           alt="Services image"
                           className="services-image"
                           src="/images/img2.jpg"
                           width={1000}
                           height={458}
                           style={{ width: "100%", height: "458px", objectFit: "cover" }}
                         /> */}
                       </div>
                     </div>
                   </div>
                 </div>
               </section>
             </div>
   
             {/* Slide 2 - Provider Section */}
             <div className="slide">
               <section className="services-provider-section" >
                 <div className="services-provider-container">
                   <div className="services-provider-wrapper">
                     <div className="services-provider-image-block">
                       <div className="services-provider-image-card">
                        <Image
  alt="Choosing a Mental Health Provider"
  className="services-provider-image"
  src="/images/img4.jpg"
  width={1000}
  height={700} /* intrinsic height ok */
  style={{ width: "100%", objectFit: "cover" }} /* no fixed height */
  sizes="(max-width:1024px) 100vw, 50vw"
/>

                         {/* <Image
                           alt="Choosing a Mental Health Provider"
                           className="services-provider-image"
                           src="/images/img4.jpg"
                           width={1000}
                           height={558}
                           style={{ width: "100%", height: "700px", objectFit: "cover" }}
                         /> */}
                       </div>
                     </div>
                     <div className="services-provider-text-block">
                       <div className="services-provider-content">
                         <h3 className="services-provider-heading">Choosing a Mental Health Provider</h3>
                         <p className="services-provider-paragraph">
                           You need to choose a therapist who you can trust and feel comfortable with. The following is an explanation of the primary titles providers use and a brief description of the scope of their practice.
                         </p>
                         <p className="services-provider-paragraph">
                           A psychiatrist will usually have an M.D. after their name. Specialists in certain medical specialties receive additional training and experience beyond the basic qualifications required to become a physician. Following this initial coursework, there is specialized coursework and then a period of residency in Psychiatry. Psychiatrists&apos; education backgrounds provide the basis for identifying biological factors that lead to emotional difficulties. Only psychiatrists can prescribe medication because they&apos;re licensed to do so.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </section>
             </div>
           </div>
   
          
   </>
  )
}

export default Demo
