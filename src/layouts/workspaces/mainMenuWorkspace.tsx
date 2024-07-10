"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CreateWorkspace } from "./createWorkspace";

import { getDataFormApi } from "@/function/api";
import { DropdownWorkspace } from "./dropdownWorkspace";

import { PraLoader } from "../praloader/praloader";

export function MainMenuWorkspace() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [data, setData] = React.useState<item[]>([]);
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const [loading, setLoading] =React.useState<boolean>(false);

  interface item {
    value: string;
    name: string;
    uuid: string;
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data, status } = await getDataFormApi({
          endpoint: "workspaces",
        });
        if (status === 200) {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [refresh]);

  return (
    <>
      <PraLoader loading={loading}/>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full text-lg justify-between px-2 border-none shadow-none"
          >
            {value
              ? data.find((item) => item.name === value)?.name
              : "Select framework..."}
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[22rem] h-96 ml-3 p-3">
          <Command className="border-none">
            <div className="flex items-center justify-between mb-2">
              <div className="border rounded-md">
                <CommandInput
                  className="border-none h-9 w-48"
                  placeholder="Search framework..."
                />
              </div>
              <CreateWorkspace
                setOpen={setOpen}
                setRefresh={setRefresh}
                refresh={refresh}
                setLoading={setLoading}
              />
            </div>
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup heading="Recently visited">
                {data.map((itemData) => (
                  <div
                    key={itemData.uuid}
                    className="flex items-center group hover:bg-gray-100 rounded-md pr-2 ml-4"
                  >
                    <CommandItem
                      className="flex justify-between w-full" // tambahkan "group" disini
                      key={itemData.uuid}
                      value={itemData.name}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <span>{itemData.name}</span>
                    </CommandItem>
                    <div className="p-1 hidden group-hover:block hover:bg-gray-300 rounded-sm cursor-pointer">
                      <DropdownWorkspace
                        uuid={itemData.uuid}
                        setRefresh={setRefresh}
                        refresh={refresh}
                        setLoading={setLoading}
                        setOpen={setOpen}
                      />
                    </div>
                  </div>
                ))}
              </CommandGroup>
              <CommandGroup heading="More workspaces">
                <CommandEmpty>No framework found.</CommandEmpty>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
