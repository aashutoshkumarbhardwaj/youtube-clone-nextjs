import { Videocard } from "./VideoCard";

const VIDEO = [
  {
    title: "How to have gf in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have Bf in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have DONO in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have TINO in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have gf in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have Bf in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have DONO in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have TINO in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have gf in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have Bf in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have DONO in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
  {
    title: "How to have TINO in 5 days || beautiful one",
    image: "/ghalib.jpg",
    thumbnail: "/dp.jpg",
    channelName: "Ghalib",
    views: "1.2M",
    uploadDate: "2 days ago",
  },
];

export const VideoGrid = () => {
  return  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
      {VIDEO.map((video, idx) => (
        <Videocard
          key={idx}
          title={video.title}
          image={video.image}
          thumbnail={video.thumbnail}
          channelName={video.channelName}
          views={video.views}
          uploadDate={video.uploadDate}
        />
      ))}
    </div>
};