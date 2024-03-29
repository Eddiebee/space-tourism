import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/data";
import { TDataContext, TImages } from "../../shared/types";
import CrewArticle from "./CrewArticle";
import CrewImage from "./CrewImage";
import { crewNavLinks } from "./CrewLayout";
import CrewNav from "./CrewNav";

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
      <div className="flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:items-start lg:mt-[-6rem]">
        <div className="w-[90%] h-62 mx-auto mb-8 border-b-[0.14rem] border-selection md:mb-[-10rem] md:border-none lg:mb-0">
          <CrewImage images={crewFromUrl!.images} text={crewFromUrl!.name} />
        </div>
        <div className="md:flex md:flex-col-reverse lg:justify-start lg:mt-48 lg:mx-7">
          <CrewNav crewNavLinks={crewNavLinks} activeLink={params.crew} />
          <CrewArticle
            name={crewFromUrl!.name}
            role={crewFromUrl!.role}
            bio={crewFromUrl!.bio}
          />
        </div>
      </div>
    </>
  );
};

export default CrewDetail;
