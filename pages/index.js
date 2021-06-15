import Head from "next/head";
import Nav from "../components/Nav";
import MeetingCard from "../components/MeetingCard";

const Page = () => (
  <>
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        media="print"
        onload="this.media='all'"
      />

      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        />
      </noscript>

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />
    </Head>
    <div>
      <Nav />

      {/* <div class="meeting__participants-container flex flex-row">
      <MeetingCard name="Team UI/UX" description="Weekly team meeting" time="10:00 - 11:00 AM" bgColor="bg-blue-200"/>
      <MeetingCard name="Usability Testing" description="with Mr. Ferdinand" time="10:00 - 11:00 AM" bgColor="bg-orange"/>
      <MeetingCard name="Offline Meeting" description="Client from USA" time="11:20 - 12:20 AM" bgColor="bg-purple"/>
      </div> */}
    </div>

  </>
);

export default Page;
