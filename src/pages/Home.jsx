import { TransitionLink } from "@/shared/TransitionLink";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div className="min-h-screen bg-[url(@/assets/bg.jpg)] bg-cover flex flex-col">
        <Header />

        <div className="flex-grow w-full justify-center items-center lg:justify-baseline flex">
          <div className="flex flex-col max-w-[989px] lg:w-full text-white max-lg:text-center">
            <motion.h1
              className="text-3xl font-normal md:text-5xl font-header lg:text-left"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              drag
              dragConstraints={{
                top: -125,
                right: 125,
                bottom: 125,
                left: -125,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}
            >
              ХираКата
            </motion.h1>

            <motion.p
              className="max-w-2xl my-[22px] mx-3 text-base md:text-xl font-bold text-white font-body lg:text-left lg:mx-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              drag
              dragConstraints={{
                top: -125,
                right: 125,
                bottom: 125,
                left: -125,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}
            >
              Хотите освоить японский язык? Мы поможем вам разобраться в теории,
              практике изучения и тестирования иероглифов хираганы и катаканы
            </motion.p>

            <div className="flex gap-[22px] max-lg:items-center max-lg:justify-center ">
              <TransitionLink
                to="/hiragana"
                drag
                dragConstraints={{
                  top: -125,
                  right: 125,
                  bottom: 125,
                  left: -125,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
                className="px-4 py-2 mt-2 text-base font-bold text-white bg-red-700 cursor-pointer md:px-6 md:text-xl font-body hover:bg-red-800 active:bg-red-900 rounded-4xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Хирагана
              </TransitionLink>

              <TransitionLink
                to="/katakana"
                drag
                dragConstraints={{
                  top: -125,
                  right: 125,
                  bottom: 125,
                  left: -125,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
                className="px-4 py-2 mt-2 text-base font-bold text-white bg-red-700 cursor-pointer md:px-6 md:text-xl font-body hover:bg-red-800 active:bg-red-900 rounded-4xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                Катакана
              </TransitionLink>
            </div>
          </div>
        </div>

        <Footer page="home" />
      </motion.div>
    </>
  );
}

export default Home;
