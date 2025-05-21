export function Videocard(props: any) {
    return <div className="p-3">
        <div className="w-full max-w-sm">
            {/* Video Thumbnail */}
            <img src={props.image} alt="Video thumbnail" className="w-full rounded-md" />

            {/* Video Info */}
            <div className="grid grid-cols-12 gap-1 mt-3">
                {/* Channel Image */}
                <div className="col-span-2">
                    <img src={props.thumbnail} alt="Channel DP" className="rounded-full w-10 h-10 object-cover" />
                </div>

                {/* Title and Channel Info */}
                <div className="col-span-10">
                    <div className="font-medium text-sm text-white">
                        {props.title}
                    </div>
                    <div className="text-gray-400 text-sm">
                        {props.channelName}
                    </div>
                    <div className="text-gray-400 text-sm">
                        {props.views} • {props.uploadDate}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
