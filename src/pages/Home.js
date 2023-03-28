import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

const Home = () => {
  return (
    <>
      {/* section 1 starts here  */}
      {/* <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PRO5</h4>
                  <h5>iPAD S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPAD S13+ Pro</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <div id="carouselExample" className="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/DSC_1197.jpg" className="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/DSC_1049.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/DSC_1349.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/DSC_0841.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/DSC_1074.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/DSC_1334.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>






      {/* section 2 starts here */}
      {/* <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15 ">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all Orders over $5</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15 ">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* section 3 starts here */}
      {/* <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/Tv.jpg" alt="camera" />
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/Tv.jpg" alt="camera" />
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}




<section className=" py-5 home-wrapper-2">
<div className="container-xxl">
  <div className="row">
    <div className="col-12">
      <h2 className='text-blue'>Alumni Association</h2>
      <hr />
     
      <p align="justify">
      NIT Patna prides itself on the success of its alumni. After successfully completing their academic years at the institute, our alumni went on to expand their wings and reached new heights, be it as entrepreneurs, industrialists, academicians, researchers, social cause champions, bureaucrats etc. We have had many notable alumni who have received national and international recognition in their respective professional fields. With more than 45000 alumni spanning across the globe, they have been instrumental in strengthening the image of NIT Patna.
 </p>
 <p align="justify">Though their dreams took them in new directions, BCE-NITP alumni have always felt connected to their alma mater and hence, they have over the years nurtured the institute through their generous contributions. The spirit of Giving Back is reflected in every corner of the institute be it infrastructure development, scholarships, especially to girl students, financial support to various hobby clubs, set-up of different R&D labs and faculty chairs, donations to various community development sectors, environment etc. </p> 
 <p align="justify">
 Established in July 1886, Alumni Association of NITP is an independent registered body of more than 40000 alumni spanning across the world. Its mission is –
 </p>

 <p align="justify">
 <ul>
                        <li>To actively promote interaction &amp; networking among its alumni.</li>
                        <li>To be a pillar of support in their hour of need.</li>
                        <li>To help realize the notion of <i>Giving Back</i> to the Alma mater.</li>
                        <li>To function on a charitable basis, and to run the Association on ‘no profit-no loss’ basis’. </li>
                        <li>To contribute to the vision and strengthen the image of NIT PATNA at national &amp; international level.</li>
                     </ul></p>


    </div>
  </div>
</div>
</section>






      




{/* next section starts */}
<section className=" py-2 home-wrapper-2">
<div className="container-xxl">
  <div className="row">
    <div className="col-12">
      <h2 className='text-blue'>Director's Desk</h2>
      <hr />
      <img src="/images/PKJ_Desk Photo.jpg" alt="pb" align="left" height="189" hspace="25" width="185" />
      <p align="justify">
 It is my pleasure to introduce one of the oldest Technological Institutes of North India, National Institute of Technology Patna, whose history goes back to 1876 when four survey schools were established in Dacca, Hoogly, Cuttack and Patna. The schools at Hoogly and Cuttack failed but those at Dacca and Patna continued to prosper. In 1882, a separate altogether, named as Bihar Industrial School, was opened in the premises of the survey school in Patna college campus. </p>
 <p align="justify">In July 1886, these two separate institutions were merged and given the name of Bihar School of Engineering under the leadership of Mr. A Ewbank, the then principal of Patna College. Between 1892 and 1902, a functional building which is at present the main administrative building of NIT Patna, was built with Rs. 100,000/- donation from Nawab Lulf Ali Khan of Patna City. </p> 
 <p align="justify">
 The balance amount of Rs. 38,000/- came from the Prince of Wales reception fund. Prof. C. R. Walford was the Principal of this college from 1900 to 1926. In 1924, the engineering school upgraded to Bihar College of Engineering under Patna University. In 2004, MHRD, Government of India upgraded Bihar College of Engineering to National Institute of Technology Patna and in 2007 it came under the act ‘NIT Act 2007’and declared Institute of National Importance.</p>

 <p align="justify">
At present NIT Patna is offering undergraduate programs (B. Tech & B. Arch) and Post graduate program (M. Tech & MRUP) along with Ph.D. Programs. Total number of students is nearly 3000. The institute has state-of-art laboratories, in each department. This great institute has produced large number of alumni who served the nation with distinction like Mr. M. B. Verma, former Program Director of Prestigious LCA Project of DRDO, Dr. Ratan K. Sinha, Chairman, Atomic Energy Commission of India, Mr. C. Prasad, Ex. D G CPWD to name a few. The Institute has a very active linkage industry from its inception. Different PSUs are awarding scholarships to our students. The institute is going to sign MoU with FICCI and CII for collaboration soon. All our passed out graduates are serving the Indian Industry and PSUs with distinction. I wish the Institute all the success.</p>

<p align="justify">
-Prof. Pradip Kumar Jain,
Director NIT Patna
</p>
    </div>
  </div>
</div>
</section>



    </>
  )
}

export default Home
