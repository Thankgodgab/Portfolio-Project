import React from "react";
import SkillItem from "../organisms/SkillItem";
import * as motion from "motion/react-client";
import SubTitle from "../organisms/SubTitle";
import Card from "./Card";
import SkillCardContent from "../organisms/SkillCardContent";
import { skills } from "../../constant";

function SkillSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2.5 md:px-[50px] py-[100px]">
      <div className="w-full flex items-start justify-start flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            scale: { type: "spring", stiffness: 100 },
          }}
          viewport={{ once: true }}
          className="w-full flex flex-col gap-4"
        >
          <SubTitle
            text="My Tools"
            title="Professional "
            titleSpan="Skills & Technologies"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            scale: { type: "spring", stiffness: 100 },
          }}
          viewport={{ once: true }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 "
        >
          {skills.map((skill, idx) => (
            <SkillItem key={skill.name + idx} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SkillSection;
