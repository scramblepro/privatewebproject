import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMotionSafe } from "../../../lib/motion";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { Section } from "../../atoms/Section";

export const HeroSection = () => {
  const navigate = useNavigate();
  const motionSafe = useMotionSafe();

  return (
    <Section
      aria-labelledby="hero-heading"
      className="bg-gradient-to-br from-[var(--color-header)] to-slate-800 text-white first:pt-0"
    >
      <Container className="flex min-h-[min(70vh,32rem)] flex-col justify-center py-[var(--space-section)] sm:min-h-[28rem] lg:min-h-[32rem]">
        <motion.div
          variants={motionSafe.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className="mb-[var(--space-md)] text-sm font-medium uppercase tracking-widest text-blue-200"
          >
            Веб-студия
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className="max-w-3xl text-3xl font-bold leading-[var(--leading-tight)] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Привет, на связи Совдэп 0/
          </motion.h1>
          <motion.p
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className="mt-[var(--space-lg)] max-w-2xl text-base leading-[var(--leading-relaxed)] text-slate-200 sm:text-lg"
          >
            Делаем API и веб-приложения, сайты, интеграции, поддержка и
            сопровождение
          </motion.p>
          <motion.div
            variants={motionSafe.fadeInUp}
            transition={motionSafe.transition}
            className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-md)] sm:flex-row sm:items-center"
          >
            <Button size="lg" onClick={() => navigate("/contact")}>
              Связаться
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:border-white hover:bg-white hover:text-[var(--color-header)]"
              onClick={() => navigate("/projects")}
            >
              Смотреть проекты
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
