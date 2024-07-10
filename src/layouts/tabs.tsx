import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabsComponents = () => {
  return (
    <>
      <style>
        {`
          .tabs-trigger {
            padding: 0.75rem;
            border: none;
            border-bottom: 2px solid transparent;
            box-shadow: none;
            border-radius: 0;
            transition: border-bottom 0.2s ease;
          }

          .tabs-trigger:focus,
          .tabs-trigger:active {
            outline: none;
            box-shadow: none;
            border-bottom: 2px solid #2563EB; /* Replace #000 with your desired active border color */
          }

          .tabs-trigger[aria-selected="true"] {
            border-bottom: 2px solid #2563EB; /* Active state border color */
            box-shadow: none;
          }
        `}
      </style>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="bg-white w-full border-b-[1px] flex rounded-none justify-start h-12">
          <TabsTrigger className="tabs-trigger space-x-1" value="overview">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
              />
            </svg>
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger className="tabs-trigger space-x-1" value="board">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              />
            </svg>
            <span>Board</span>
          </TabsTrigger>
          <TabsTrigger className="tabs-trigger space-x-1" value="list">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
              />
            </svg>
            <span>List</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};
