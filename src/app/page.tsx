import Image from "next/image";
import { Videocard } from "./component/VideoCard";
import { VideoGrid } from "./component/VideoGrid";
import {Appbar} from "./component/Appbar";
export default function Home() {
  return (
    <div>
      <Appbar />
     
      <VideoGrid />
      

    </div>
  );
}
