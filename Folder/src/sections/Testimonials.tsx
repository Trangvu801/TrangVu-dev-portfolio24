import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-21.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alice Nguyen",
    position: "Student @ Dickinson College",
    text: "Trang did an incredible job creating my portfolio website! The design is highly interactive, logically structured, and perfectly showcases all my skills. Her attention to detail and ability to bring my vision to life exceeded my expectations. I'm extremely satisfied with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Lindsey Lyons",
    position: "Center Directior @ Center for Sustainability Education",
    text: "Trang has been an exceptional intern—the best I've ever had! She not only created an efficient and user-friendly online carpool platform but also managed multiple projects seamlessly. Her dedication, problem-solving skills, and ability to bring ideas to life made a significant impact. Truly outstanding work!",
    avatar: memojiAvatar2,
  },
  {
    name: "Patrick Oh",
    position: "Music Technician @ Dickinson College",
    text: "Trang is an incredibly talented and hardworking individual. Her vision, critical thinking, and fast-learning abilities set her apart. She quickly adapts to new challenges and excels in any role she takes on. I have no doubt she will thrive in any position she pursues!",
    avatar: memojiAvatar3,
  },
  {
    name: "Mark Brown",
    position: "Head of Office @ International Organization for Migration",
    text: "Trang was an exceptional intern at IOM, showing great energy, attention to detail, and teamwork. She played a key role in organizing the Global Migration Film Festival, demonstrating initiative and strong communication skills in both Vietnamese and English. I highly recommend her!",
    avatar: memojiAvatar4,
  },
  // {
  //   name: "Russ Carmer",
  //   position: "Director of IT @ MegaCorp",
  //   text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
  //   avatar: memojiAvatar5,
  // },
];

export const TestimonialsSection = () => {
  return (
    <div>
      <div className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Happy Clients"
            title="What Clients Say about Me"
            description="Don't just take my word for it. See what my clients have to say about my works."
          />
          <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
            <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
              {[...new Array(2)].fill(0).map((_, index) =>(
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
