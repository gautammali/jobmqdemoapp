import { serverConfiguration } from "@/config/index.constant";

export default function Attachment({ data }) {
    const content = data?.map((item, id) => (
        <div key={id} className="p-5 border w-full flex justify-between items-center">
            <p>{item?.title}</p>
            <a href={`${serverConfiguration.serverFileURL}file/${item?.filePath}`} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-600 hover:underline cursor-pointer">
                View
            </a>
        </div>
    ));
    return (
        <div className="border p-5">
          <h3 className="text-2xl font-semibold pb-5">Job Attachments</h3>
          {content}
        </div>
    );
}

