import { Button } from "@nextui-org/button";

export const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="mt-5 mx-auto max-w-7xl bg-neutral-950 p-10 rounded-md"
      >
        <div className="flex flex-col justify-center items-center">
          <Button className="mb-3">Experience</Button>
          <p className="mb-6 text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <div className="p-10  bg-neutral-800 rounded-lg flex justify-between">
          <div>Coreteam</div>
          <div>
            <div>
              <p className="text-2xl font-bold">Frontend developer</p>
            </div>
            <div className="w-96">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                necessitatibus fuga ratione explicabo error deleniti sit
                incidunt quae esse reprehenderit.
              </p>
            </div>
            {/* <div>Frontend developer</div> */}
          </div>
          <div>01.10.2020</div>
        </div>
      </div>
    </>
  );
};
