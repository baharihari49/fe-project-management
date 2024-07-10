"use client";

import { deleteDataFormApi } from "@/function/api";
import { Dropdown } from "flowbite-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function DropdownWorkspace({
  uuid,
  setRefresh,
  refresh,
  setLoading,
  setOpen,
}: {
  uuid: string;
  setRefresh: (open: boolean) => void;
  refresh: boolean;
  setLoading: (open: boolean) => void;
  setOpen: (open: boolean) => void;
}) {
  const onDelete = async () => {
    setLoading(true);
    setOpen(false)
    try {
      const { status } = await deleteDataFormApi({
        endpoint: "workspaces/" + uuid,
      });

      if (status === 200) {
        setRefresh(!refresh);
        setLoading(false);
        setOpen(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(true);
      setOpen(false)
    }
  };

  const AlertDialogElement = () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <p>Delete</p>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to delete this item?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              workspaces and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      inline
      renderTrigger={() => (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    >
      <Dropdown.Item className="w-28">
        <AlertDialogElement />
      </Dropdown.Item>
    </Dropdown>
  );
}
