import React from "react";
import { auth } from "@clerk/nextjs";
import Dropzone from "../../components/Dropzone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import TableWrapper from "@/components/table/TableWrapper";

async function page() {
  const { userId } = auth();
  if (!userId) {
    return;
  }

  const docsResult = await getDocs(collection(db, "users", userId, "files"));
  const skeletonFiles = docsResult.docs.map((doc) => ({
    id: doc.id,
    fileName: doc.data().fileName || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  return (
    <div>
      <Dropzone />

      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          {/* tablewrapper */}
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default page;
