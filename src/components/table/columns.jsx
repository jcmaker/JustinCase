"use client";
import Link from "next/link";
import prettyBytes from "pretty-bytes";
import { FileIcon } from "react-file-icon";

export const COLOR_EXTENSION_MAP = {
  pdf: "#0160FE",
  docx: "#2b579a",
  doc: "#2b579a",
  pptx: "#b7472a",
  ppt: "#b7472a",
  xlsx: "#217346",
  xls: "#217346",
  mpeg: "#000000",
  jpg: "#d4af37",
  jpeg: "#d4af37",
  png: "#4fb6f4",
  txt: "#000000",
  py: "#3776ab",
};

export const columns = [
  {
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue();
      const extension = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            // @ts-ignore
            // {...defaultStyles[extension]}
          />
        </div>
      );
    },
  },

  {
    accessorKey: "fileName",
    header: "FileName",
  },
  {
    accessorKey: "timestamp",
    header: "Date",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(Number(renderValue()))}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => {
      return (
        <Link
          href={renderValue() || "#"}
          target="_blank"
          className="underline text-blue-500 hover:text-blue-700"
        >
          Download
        </Link>
      );
    },
  },
];
