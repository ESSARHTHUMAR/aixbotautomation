import { Card } from "@/components/utils/Card";
import { CornerBlur } from "@/components/utils/CornerBlur";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiBox,
  FiPhone,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (features.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="relative overflow-hidden border-b border-zinc-700 bg-zinc-900/30 py-12"
      ref={ref}
    >
      <div className="relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-3">
              <SectionHeading>Why <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">choose us</span></SectionHeading>
              <SectionSubheading>
                Production-grade scraping, automation, bots, and CRM/API integrations that cut manual work, accelerate delivery, and keep data secure.
              </SectionSubheading>
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-zinc-700 bg-zinc-900 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${features.length}, 1fr)`,
            }}
          >
            {features.map((post) => {
              return <Feature key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>

      <CornerBlur />
    </section>
  );
};

const Feature = ({ title, description, Icon }) => {
  return (
    <Card
      className="shrink-0"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <Icon className="size-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 p-3 text-blue-50" />
      <p className="mb-1.5 mt-3 text-lg font-medium">{title}</p>
      <p className="text-sm text-zinc-400">{description}</p>
    </Card>
  );
};

export default Carousel;

const features = [
  {
    id: 1,
    Icon: FiArrowUp,
    title: "Scalable web scraping",
    description:
      "High-quality, deduplicated data at scale with robust anti-bot handling.",
  },
  {
    id: 2,
    Icon: FiBox,
    title: "Workflow automation",
    description:
      "Automate repetitive tasks and trigger actions across your stack.",
  },
  {
    id: 3,
    Icon: FiPhone,
    title: "24/7 bots",
    description:
      "Bots that monitor, notify, and act without manual effort.",
  },
  {
    id: 4,
    Icon: FiUsers,
    title: "API & CRM integrations",
    description:
      "Sync leads, deals, and events across CRMs and third-party APIs.",
  },
  {
    id: 5,
    Icon: FiShield,
    title: "Security by design",
    description:
      "Encrypted secrets, least-privilege access, and compliant data handling.",
  },
  {
    id: 6,
    Icon: FiBox,
    title: "Managed delivery & support",
    description:
      "SLAs, proactive monitoring, and rapid iteration to ship faster.",
  },
];
