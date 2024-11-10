import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import plus from "../../../public/assests/Plus.svg";

const items = [
    {
        question: "🌸 1. What types of flowers do you offer?",
        answer: "We offer a wide range of flowers, including seasonal blooms, exotic varieties, and popular choices like roses, lilies, and orchids. Each bouquet is crafted to suit different occasions and preferences.",
    },
    {
        question: "🌹 2. How can I place an order?",
        answer: " Placing an order is simple! Browse our online catalog, select the flowers you like, add them to your cart, and proceed to checkout. We accept various payment methods for your convenience.",
    },
    {
        question: "💐 3. Do you offer same-day delivery?",
        answer: " Yes, we offer same-day delivery in select locations! To ensure timely delivery, please place your order before 2 PM. We also provide options for scheduling deliveries on specific dates.",
    },
    {
        question: "🌺 4. Can I customize my flower arrangement?",
        answer: "Absolutely! We offer customizable flower arrangements. You can choose specific flowers, colors, and even the style of the arrangement to make it truly unique and tailored to your preferences.",
    },
    {
        question: "🌻 5. How do I care for my flowers to make them last longer?",
        answer: "To extend the life of your flowers, keep them in a cool place, change the water daily, and trim the stems every few days. Avoid placing them in direct sunlight or near heat sources.",
    },
    {
        question: "🌷 6. What if I need to cancel or change my order?",
        answer: " You can cancel or modify your order up to 24 hours before the scheduled delivery. Just contact our customer support team, and they’ll assist you with the changes.",
    },
];

export default function FaqPage() {
    return (
       <div>
        <h1 className="text-center font-serif text-[40px] pt-6 text-red-900 mx-auto px-1">Helpful Information for Flower Lovers</h1>
        <p className="text-center font-serif text-[16px] md:text-[20px] mx-auto px-10 mt-2">
          {"Welcome to our FAQ section! Here, you'll find helpful information crafted with flower lovers in mind"}
        </p>

        <div className="flex flex-col lg:flex-row items-center w-full py-12 lg:py-16 px-4 gap-x-6 mx-auto max-w-screen-xl">
            
            <div className="flex-1 w-full lg:w-1/2">
                <h1 className="text-center font-serif text-[40px] mx-auto px-1">Frequently Asked Questions</h1>
                <p className="font-serif text-center lg:text-left mt-4">
                   {"Explore our Frequently Asked Questions to learn more about our wide selection of flowers, ordering process, delivery options, and tips to keep your blooms fresh. We&apos;re here to make your experience with us delightful and convenient."}
                </p>
            </div>

            <div className="flex-1 w-full lg:w-1/2 shadow-lg shadow-[#e6ae90] mx-auto">
                <div className="lg:w-full mx-auto">
                    <Accordion.Root
                        type="single"
                        defaultValue="item-1"
                        collapsible
                        className="flex flex-col gap-y-4 items-center"
                    >
                        {items.map((item, index) => (
                            <Accordion.Item
                                key={index}
                                value={`item-${index + 1}`}
                                className="w-full bg-[#ecd4c7] p-[16px] rounded-[8px] hover:bg-gradient-to-r from-cyan-200 via-white to-pink-200 shadow-lg transition-all"
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className="w-full flex items-center justify-between">
                                        <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                                            {item.question}
                                        </p>
                                        <span>
                                            <Image
                                                src={plus}
                                                alt="plusicon"
                                                className="h-10 w-10 lg:w-6 lg:h-6"
                                            />
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="pt-2 text-[#36485C]">
                                    {item.answer}
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </div>
            </div>

        </div>
       </div>
    );
}
