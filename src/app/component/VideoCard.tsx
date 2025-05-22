export function Videocard({
  title,
  image,
  thumbnail,
  channelName,
  views,
  uploadDate
}: {
  title: string;
  image: string;
  thumbnail: string;
  channelName: string;
  views: string;
  uploadDate: string;
}) {
  return (
    <div className="p-3 cursor-pointer w-full h-full">
      <div className="w-full max-w-sm">
        <img src={image} alt="Video thumbnail" className="w-full rounded-md" />
        <div className="grid grid-cols-12 gap-1 mt-3">
          <div className="col-span-2">
            <img src={thumbnail} alt="Channel DP" className="rounded-full w-10 h-10 object-cover" />
          </div>
          <div className="col-span-10">
            <div className="font-medium text-sm text-white">{title}</div>
            <div className="text-gray-400 text-sm">{channelName}</div>
            <div className="text-gray-400 text-sm">{views} • {uploadDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
