import type { DirectoryItem } from "@/types";

type PropTypes = {
  directoryItems: DirectoryItem[];
};

export const DirectorySection = ({ directoryItems }: PropTypes) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
    <div className="border-2 border-dashed order-2 md:order-1 text-lg">
      <div className="border-b-2 border-dashed px-3 uppercase">Projects</div>
      <table className="w-full">
        <tbody>
          {directoryItems
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((directoryItem) => (
              <tr
                key={directoryItem.sortOrder}
                className="group border-b-2 border-dashed last:border-b-0"
              >
                <td
                  className="p-0 group-hover:bg-black group-hover:text-white 
                group-hover:outline group-hover:outline-2 group-hover:outline-dashed 
                group-hover:outline-white group-hover:[outline-offset:-2px]
                transition-all duration-300 ease-in"
                >
                  <a
                    href={`#${directoryItem.href}`}
                    className="block pl-6 pr-3 w-full"
                  >
                    {directoryItem.name} - <i>"{directoryItem.projectTitle}"</i>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    <div className="order-1 md:order-2">{/* TODO: Art Here */}</div>
  </div>
);
