import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name={"faq"} className={"relative"}>
        <div className={"container relative z-2 py-28"}>
          <div>
            <h3
              className={"h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4"}
            >
              Curiosity didn't kill the cat, it give it answers.
            </h3>
            <p className={"body-1 max-lg:max-w-sm"}>
              You've got questions, we've got answers.{" "}
            </p>
          </div>
          <div
            className={
              "absolute faq-line_after w-0.5 h-full left-[calc(50%-1px)] -z-1 bg-s2 top-0"
            }
          />
        </div>
        <div
          className={"faq-glow_before relative z-2 border-s2 border-2 bg-s1 "}
        >
          <div className={"container flex gap-10 max-lg:block"}>
            <div
              className={
                "rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 size-20 flex items-center justify-center border-2 border-s2 bg-s1"
              }
            >
              <img
                src={"/images/faq-logo.svg"}
                alt="faq logo"
                className={"size-1/2"}
              />
            </div>
            <div className={"relative flex-1 pt-24"}>
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem faq={item} key={item.id} index={index} />
              ))}
            </div>
            <div className={"relative flex-1 lg:pt-24"}>
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem faq={item} key={item.id} index={halfLength + index} />
              ))}
            </div>
          </div>
          <div
            className={
              "faq-line_after absolute w-0.5 h-full left-[calc(50%-1px)] top-0 -z-1 bg-s2 max-lg:hidden"
            }
          />
        </div>
      </Element>
    </section>
  );
};
export default Faq;
