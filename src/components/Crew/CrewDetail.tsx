import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/data";
import { TDataContext, TImages } from "../../shared/types";
import CrewArticle from "./CrewArticle";
import CrewImage from "./CrewImage";

export type TCrew = {
  name: string;
  bio: string;
  role: string;
  images: TImages;
};

const CrewDetail = () => {
  const { crew } = useContext(DataContext) as TDataContext;
  const params = useParams() as { crew: string };

  const crewFromUrl = crew.find(
    (crewMember) =>
      crewMember.name.toLowerCase() ===
      params.crew.replace("-", " ").toLowerCase()
  );

  return (
    <>
      <section className="-mt-80">
        <div className="w-[90%] h-62 mx-auto mb-8 border-b-[0.14rem] border-selection">
          <CrewImage images={crewFromUrl!.images} text={crewFromUrl!.name} />
        </div>
        <CrewArticle
          name={crewFromUrl!.name}
          role={crewFromUrl!.role}
          bio={crewFromUrl!.bio}
        />
      </section>
    </>
  );
};

export default CrewDetail;
