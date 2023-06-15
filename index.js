import tw from "tailwind-styled-components";

import { useEffect } from "react";
import React from "react";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
        <UberLogo src="https://i.ibb.co/KbBRLVZ/Auto-logo-removebg-preview.png" />
          <Profile>
            <Name>Ajay Vedulla</Name>
            <UserImage 
            src="https://media.licdn.com/dms/image/D5603AQEQylIw3Ax9QA/profile-displayphoto-shrink_800_800/0/1675758958897?e=1690416000&v=beta&t=kuJIRZjNhMxsSKZ6DEOz7A2W-xLJdqxjpPozb_AX7x8"
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/1Rfftw0/Auto-rickshaw.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/PNMTpWc/Leonardo-Creative-Electrical-biketwo-wheelssimpletwo-seaterhel-2-removebg-preview.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/zZTTDSH/calendar-clock-icon.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}
const Wrapper = tw.div`
flex flex-col  h-screen`;
const ActionItems = tw.div`
 flex-1 p-4`;
const Header = tw.div`flex justify-between items-center`;
const UberLogo = tw.img`h-28`;
const Profile = tw.div` flex items-center `;
const Name = tw.div`mr-7 w-30 text-small`;
const UserImage = tw.img` h-20 w-20 rounded-full border border-gray-200 p-px`;
const ActionButtons = tw.div` flex `;
const ActionButton = tw.div`flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`;
const ActionButtonImage = tw.img` h-3/5`;
const InputButton = tw.div`h-10 bg-gray-200 text-2xl p-4 flex items-center mt-8`;
