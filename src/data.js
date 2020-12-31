import {v4 as uuidv4} from 'uuid';
import EZLVR from './EZLVR.png';
import hurtsButItShouldnt from './Songs/Hurts.m4a';
import simp from './Songs/Simp.m4a';
import bcg from './Songs/BCG.m4a';
import hipsters from './Songs/Hipsters.m4a';
import sloop from './Songs/Sloop.m4a'


function chillHop() {
    return [
      {
        name: "hipsters",
        artist: 'EZLVR',
        cover: EZLVR,
        id: uuidv4(),
        active: false,
        color: ['#A6CADE', '#D68CBB'],
        audio: hipsters,
    },
    {
      name: "hurts but it shouldn't",
      artist: 'EZLVR',
      cover: EZLVR,
      id: uuidv4(),
      active: false,
      color: ['#A6CADE', '#D68CBB'],
      audio: hurtsButItShouldnt,
  },
  {
    name: "i'm afraid that i'm a simp",
    artist: 'EZLVR',
    cover: EZLVR,
    id: uuidv4(),
    active: false,
    color: ['#A6CADE', '#D68CBB'],
    audio: simp, 
  },
  {
    name: "blue collared greens",
    artist: 'EZLVR',
    cover: EZLVR,
    id: uuidv4(),
    active: false,
    color: ['#A6CADE', '#D68CBB'],
    audio: bcg, 
  },
  {
    name: "sloopersonic john b (bonus)",
    artist: 'EZLVR',
    cover: EZLVR,
    id: uuidv4(),
    active: false,
    color: ['#A6CADE', '#D68CBB'],
    audio: sloop, 
  }
   
    ]
}


export default chillHop;