import type { DirectoryItem } from "@/types";

type PropTypes = {
  directoryItems: DirectoryItem[];
};

export const ProjectDirectory = ({ directoryItems }: PropTypes) => (
  <div className="flex justify-center mt-10">
    <div className="border-2 border-dashed text-lg w-full md:max-w-[80vw]">
      <div className="border-b-2 border-dashed px-3 uppercase">Directory</div>
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
                transition-all duration-500 ease-in"
                >
                  <a
                    href={`#${directoryItem.href}`}
                    className="block pl-8 pr-3 w-full flex justify-between items-center"
                  >
                    <span>
                      {directoryItem.name}
                      <span className="md:inline hidden">
                        - "{directoryItem.projectTitle}"
                      </span>
                    </span>
                    <span className="text-sm">↓</span>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
);
