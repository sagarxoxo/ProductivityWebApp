import '../styles/globals.css';
import '../styles/calendarChange.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-time-picker/dist/TimePicker.css"
import "react-clock/dist/Clock.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import Head from 'next/head';
import NavbarHeader from '../components/Navbar/NavbarHeader';

function MyApp({ Component, pageProps }) {
  return (
  <div>
     <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" / >
    </Head>
    <NavbarHeader />
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
