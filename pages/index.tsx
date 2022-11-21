import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link'
import SearchBox from '../Components/SearchBox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="home">

        <div className="container">
          <h1 style={{ textAlign: "center" }}>Weather forecast app</h1>
          <SearchBox placeholder="search for a city.." />
          <div className='places'>
            <div className='places_row'>
              <div className='places_box'>
                <Link href={'location/new-york-5128638'}>
                  <div className='places_image-wrapper'>
                    <Image
                      src={`/new-york.jpg`}
                      alt="new-york"
                      height='380'
                      width='280'
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }} />
                  </div>
                </Link>
                <span>New York</span>
              </div>
              <div className='places_box'>
                <Link href={'location/london-2643743'}>
                  <div className='places_image-wrapper'>
                    <Image
                      src={`/london.jpg`}
                      alt="london"
                      height='380'
                      width='280'
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }} />
                  </div>
                </Link>
                <span>London</span>
              </div>
              <div className='places_box'>
                <Link href={'location/tokyo-1850147'}>
                  <div className='places_image-wrapper'>
                    <Image
                      src={`/tokyo.jpg`}
                      alt="tokyo"
                      height='380'
                      width='280'
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }} />
                  </div>
                </Link>
                <span>Tokyo</span>
              </div>
              <div className='places_box'>
                <Link href={'location/paris-2968815'}>
                  <div className='places_image-wrapper'>
                    <Image
                      src={`/paris.jpg`}
                      alt="paris"
                      height='380'
                      width='280'
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }} />
                  </div>
                </Link>
                <span>Paris</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
