import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import Profile from './components/profile'
import { profileAtom } from './store/atoms/profileAtom'

function App() {
  // const [profiles, setProfile] = useState([{
  //   name: "Rita Correia",
  //   age: 32,
  //   address: "London",
  //   followers: "80K",
  //   likes: "803K",
  //   photos: "1.4K",
  // }, 
  // {
  //   name: "Ekansh K",
  //   age: 22,
  //   address: "NY",
  //   followers: "800",
  //   likes: "803K",
  //   photos: "400",
  // }
  // ])

  
  return (
    // <>
    //   <Profile name={profile.name} age={profile.age} address={profile.address} followers={profile.followers} likes={profile.likes} photos={profile.photos} />
    // </>
    <>
      <RecoilRoot>
        <ProfilesRenderer /> 
      </RecoilRoot>
    </>
  )
}

function ProfilesRenderer () {
  
  const profiles = useRecoilValue(profileAtom);
  
  return ( 
    <>
      {profiles.map(profile => <Profile key = {profile.id} name={profile.name} age={profile.age} address={profile.address} followers={profile.followers} likes={profile.likes} photos={profile.photos} />)}
    </>
  )
}




export default App
