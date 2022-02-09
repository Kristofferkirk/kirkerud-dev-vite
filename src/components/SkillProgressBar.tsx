import { animated, useSpring } from "react-spring";

const getColorScale = (progress: number) => {
  switch (progress) {
  case 1:
  case 2:
    return "yellow-500";
  case 3:
    return "green-300";
  case 4:
    return "green-500";
  case 5:
    return "green-900";
  default:
    return "";
  }
};

const SkillProgressBar = ({
  title,
  progress,
  show,
}: {
  title: string;
  progress: 1 | 2 | 3 | 4 | 5;
  show: boolean;
}) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: show ? progress * 20 : 0,
    delay: 300,
  });
  return (
    <>
      <div className="relative pt-1 skillProgressBar">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span
              className={"text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200"}
            >
              {title}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-amber-600">
              {progress}
            </span>
          </div>
        </div>
        {show && (
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
            <animated.div
              style={{
                width: number.to((n) => `${n}%`),
              }}
              className={`bg-${getColorScale(progress)}`}
            ></animated.div>
          </div>
        )}
      </div>
    </>
  );
};

export default SkillProgressBar;
