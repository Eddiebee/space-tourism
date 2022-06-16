import React from "react";
import { Outlet } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import PageSection from "../ui/PageSection";
import SideNumbers from "../ui/SideNumbers";
import Title from "../ui/Title";

const CrewLayout = () => {
  return (
    <section className="Crew min-h-screen w-full text-center">
      <PageHeading>
        <SideNumbers index="1" dark={true} />
        <Title title="Pick your destination" />
      </PageHeading>
      <PageSection>
        <Outlet />
      </PageSection>
    </section>
  );
};

export default CrewLayout;