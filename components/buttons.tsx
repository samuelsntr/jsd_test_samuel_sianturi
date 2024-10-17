"use client";
import Link from "next/link";
import React from "react";
import {
  IoAddSharp,
  IoPencil,
  IoTrashOutline,
  IoInformationCircle,
} from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { toast } from "react-toastify";
import axios from "axios";

export const AddButton = () => {
  return (
    <Link
      href="/species/create"
      className="inline-flex items-start space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
    >
      <IoAddSharp size={20} />
      Add
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/species/edit/${id}`}
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({
  id,
  onDelete,
}: {
  id: string;
  onDelete: () => void;
}) => {
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this species?")) {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          alert("You need to log in first.");
          return;
        }

        const response = await axios.delete(
          `https://test.api.sahabatlautlestari.com/species/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status >= 200 && response.status < 300) {
          toast.success("Deleted successfully!");
          if (onDelete) {
            onDelete(); // Call the onDelete function to refresh the species list
          }
        } else {
          alert(`Failed to delete species data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error deleting species:", error);
        if (axios.isAxiosError(error) && error.response) {
          alert(
            `Failed to delete species: ${error.response.status} - ${
              error.response.data.message || error.message
            }`
          );
        } else {
          alert("Failed to delete species.");
        }
      }
    }
  };

  return (
    <button
      className="rounded-sm border p-1 hover:bg-gray-100"
      onClick={handleDelete}
    >
      <IoTrashOutline size={20} />
    </button>
  );
};

export const DetailButton = () => {
  return (
    <button className="rounded-sm border p-1 hover:bg-gray-100">
      <IoInformationCircle size={20} />
    </button>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  const className = clsx(
    "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
    {
      "opacity-50 cursor-progress": pending,
    }
  );

  return (
    <button type="submit" className={className} disabled={pending}>
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
