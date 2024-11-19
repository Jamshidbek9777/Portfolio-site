import { Button } from "@nextui-org/button";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="mt-5 mx-auto max-w-7xl bg-neutral-950 h-[20rem] p-10 rounded-md"
    >
      <div className="flex justify-center">
        <Button>Here is my skills</Button>
        <div>{/* <img src="/imgs/js.png" alt="" /> */}</div>
      </div>
    </div>
  );
};
