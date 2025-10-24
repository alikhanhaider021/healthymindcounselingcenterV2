import React from 'react'
import './demo2.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from 'next/image'
const Demo2 = () => {
  return (
   <>
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
   
   </>
  )
}

export default Demo2
