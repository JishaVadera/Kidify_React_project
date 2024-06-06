import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>

      {/* ------------------------------Section-1------------------------------------------------------------ */}

      <div className='container'>
        <h1 className='font-bold text-center text-5xl mt-20 mb-2'>About</h1>
        <div className='text-center mb-5'>
          <Link className='' to="/">
            <span className='text-purple-400'>Home</span>
          </Link>
          <span> <MdOutlineKeyboardArrowRight className='inline' /></span>
          <span className=''>About</span>
        </div>
      </div>

      {/* ------------------------------Section-2------------------------------------------------------------ */}

      <div className='container-xxl mb-12 mx-auto flex justify-center'>
        <img className='transition duration-100 ease-out hover:scale-[1.05]' src="./src/assets/about_page.png" alt="" />
      </div>

      {/* ------------------------------Section-3------------------------------------------------------------ */}

      <div className='container-xxl'>
        <h1 className='text-3xl font-bold pl-24 mb-6'>Our Stories</h1>
        <p className='text-[20px] font-bold pl-24 mb-6'>As parents, we know how important it is to have a smooth transition from playtime to bedtime. Children<br></br>
          often get so involved in their playtime activities that they don’t want to stop. However, when it’s time to go <br></br>
          to bed, they need to change into their pajamas.
        </p>
        <p className='pl-24 text-[20px] font-medium mb-6'>
          This can be a hassle, especially if your child is not in the mood to cooperate. But what if there were outfits <br></br>
          that could easily transition from playtime to bedtime? This would make our lives as parents so much <br></br>
          easier! In this article, we’ll discuss some outfits that can do just that.
        </p>
      </div>


      {/* ------------------------------Section-4------------------------------------------------------------ */}

      <div className='container-xxl font-semibold'>
        <div className='pl-24 mb-3'>
          <ImCheckboxChecked className='inline mr-4' />
          <span className='mr-6'>We provide qualified & expert</span>
          <ImCheckboxChecked className='inline mr-4' />
          <span> Modern tools & technology use</span>
        </div>
        <div className='pl-24 mb-3'>
          <ImCheckboxChecked className='inline mr-2' />
          <span className='mr-8 '> Neat & cleaning top Services</span>
          <ImCheckboxChecked className='inline mr-4' />
          <span> We Develop Digital Future</span>
        </div>
      </div>

      {/* ------------------------------Section-5------------------------------------------------------------ */}


      <div className='container-lg flex justify-around bg-fuchsia-200 mb-6'>
        <div className='mt-4 text-center mb-4'>
          <h3 className='font-bold mb-2 text-xl'>12 Years</h3>
          <p className='text-gray-600'>We’ve more than 12 years working <br></br> experience.</p>
        </div>
        <div className='mt-4 text-center mb-4'>
          <h3 className='font-bold mb-2 text-xl'>2000+ Employee</h3>
          <p>We’ve more than 2000 employees <br></br> working near you.</p>
        </div>
        <div className='mt-4 text-center mb-4'>
          <h3 className='font-bold mb-2 text-xl'>68 Branches</h3>
          <p>We have 68 branches across the <br /> country and are expanding</p>
        </div>
      </div>

      {/* ------------------------------Section-6------------------------------------------------------------ */}


      <div className='container-xxl mb-10'>
        <h1 className='text-3xl font-bold pl-24 mb-6'>Our Mission</h1>
        <p className='text-[20px] font-semibold pl-24'>
          This can be a hassle, especially if your child is not in the mood to cooperate. But what if there were outfits<br />
          that could easily transition from playtime to bedtime? This would make our lives as parents so much<br />
          easier! In this article, we’ll discuss some outfits that can do just that.<br />
        </p>
      </div>

      {/* ------------------------------Section-7------------------------------------------------------------ */}
      <div className='container-fluid  bg-fuchsia-200 mb-24 pb-20'>
        <h3 className='font-bold text-3xl pl-24 ml-36 pt-5 mb-9'>Our Gallery</h3>
        <div className='flex justify-center items-center '>
          <img src="./src/assets/pic2.png" alt="" srcset="" height="480px" width="430px" className='pl-24 transition duration-100 ease-out hover:scale-[1.05]' />
          <div className=''>
            <Row className='mb-4'>
              <Col>
                <img src="./src/assets/pic6.png" alt="" width="400px" className='pl-5 h-56 transition duration-100 ease-out hover:scale-[1.05]' />
              </Col>
              <Col>
                <img src="./src/assets/pic.png" alt="" srcset="" width="400px" className='pl-5 h-56 transition duration-100 ease-out hover:scale-[1.05]' />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src="./src/assets/pic4.png" alt="" width="400px" className='pl-5 h-56 transition duration-100 ease-out hover:scale-[1.05]' />
              </Col>
              <Col>
                <img src="./src/assets/pic5.png" alt="" srcset="" width="400px" className='pl-5 h-56 transition duration-100 ease-out hover:scale-[1.05]' />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* ------------------------------Section-8------------------------------------------------------------ */}

      <div className='container'>
        <h1 className='text-center text-indigo-800 font-bold text-4xl mb-8'>OUR HAPPY CUSTOMER </h1>
        <div className="max-w-[1400px] mx-auto mb-16">
          <Slider {...settings}>
            <div className='shadow-green-950 shadow-2xl border rounded-lg !w-96'>
              <p className='text-center'>
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
            <div className='shadow-green-950 shadow-2xl border rounded-lg !w-96'>
              <p className='text-justify'> 
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
            <div className='shadow-green-950 shadow-2xl border rounded-lg !w-96'>
              <p>
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
            <div>
              <p>
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
            <div>
              <p>
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
            <div>
              <p>
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
            <div>
              <p>
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
            <div>
              <p>
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
            <div>
              <p>
                "I recently discovered this fashi0on shop and I am <br />
                obsessed! The clothes are of great quality and the <br />
                designs are unique and stylish. I always receive <br />
                compliments whenever I wear something from this<br />
                store. Definitely my new go-to for trendy outfits."<br />
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default About
