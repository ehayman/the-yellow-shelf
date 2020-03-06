import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './../sass/main.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className={"global-container-bg " + children.type ? children.type.name : ""}>
      <div className="global-container">
      <div className="global-container-shapes">
{/*         <div className="global-container-shapes-1"></div>
        <div className="global-container-shapes-3"></div>
        <div className="global-container-shapes-2"></div> */}
{/*       <svg width="128px" height="256px" viewBox="0 0 128 256" className="global-container-shapes-1">
          <g stroke="none" strokeWidth="1">
              <g id="ketchup-copy" transform="translate(-520.000000, -3390.000000)">
                  <path d="M520,3518 C520,3447.30755 577.307552,3390 648,3390 L648,3454 L648,3454 C612.653776,3454 584,3482.65378 584,3518 C584,3553.34622 612.653776,3582 648,3582 L648,3646 C577.307552,3646 520,3588.69245 520,3518 Z" id="donut-half-large"></path>
              </g>
          </g>
      </svg>
      <svg width="80px" height="160px" viewBox="0 0 80 160" className="global-container-shapes-2">
          <g id="Web-concepts" stroke="none" strokeWidth="1">
              <g id="ketchup-copy" transform="translate(-720.000000, -3438.000000)">
                  <path d="M799.393562,3438 L799.999,3438.005 L799.999154,3478.00456 C799.79765,3478.00152 799.595783,3478 799.393562,3478 C777.469635,3478 759.696781,3495.90861 759.696781,3518 C759.696781,3540.09139 777.469635,3558 799.393562,3558 L799.999,3557.994 L800.000153,3597.99771 C799.798134,3597.99924 799.595937,3598 799.393562,3598 C755.545708,3598 720,3562.18278 720,3518 C720,3473.81722 755.545708,3438 799.393562,3438 Z" id="donut-half"></path>
              </g>
          </g>
      </svg>
      <svg width="49px" height="128px" viewBox="0 0 49 128" className="global-container-shapes-3">
          <g id="Web-concepts" stroke="none" strokeWidth="1">
              <g id="ketchup-copy" transform="translate(-671.000000, -3174.000000)">
                  <rect id="rectangle-48-copy" x="671.532876" y="3174" width="48" height="128"></rect>
              </g>
          </g>
      </svg>
      <svg width="48px" height="48px" viewBox="0 0 48 48" className="global-container-shapes-4">
          <g id="Web-concepts" stroke="none" strokeWidth="1">
              <g id="ketchup-copy" transform="translate(-688.000000, -3046.000000)">
                  <circle id="circle-48" cx="712" cy="3070" r="24"></circle>
              </g>
          </g>
      </svg>
      <svg width="64px" height="64px" viewBox="0 0 64 64" className="global-container-shapes-6">
    <g id="Web-concepts" stroke="none" strokeWidth="1">
        <g id="ketchup-copy" transform="translate(-608.000000, -3030.000000)">
            <circle id="circle-64" cx="640" cy="3062" r="32"></circle>
        </g>
    </g>
    </svg>
      <svg width="49px" height="128px" viewBox="0 0 49 128" className="global-container-shapes-5">
          <g id="Web-concepts" stroke="none" strokeWidth="1">
              <g id="ketchup-copy" transform="translate(-671.000000, -3174.000000)">
                  <rect id="rectangle-48-copy" x="671.532876" y="3174" width="48" height="128"></rect>
              </g>
          </g>
      </svg> */}
      </div>
      <Navbar />
      <div className="global-container-inner">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <div>{children}</div>
      <Footer /> 
      </div>
      </div>
    </div>
  )
}

export default TemplateWrapper
