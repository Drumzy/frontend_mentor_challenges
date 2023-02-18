import first_heading from "@images/image-retro-pcs.jpg";
import second_heading from "@images/image-top-laptops.jpg";
import third_heading from "@images/image-gaming-growth.jpg";

export interface HeadlineProps{
    title: string;
    content: string;
}
export interface HeadingsProps{
    ranking: number;
    title:string;
    description:string;
    img: ImageMetadata;
}
export const HeadingsData: Array<HeadingsProps> = [
    {
    ranking: 1,
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    img: first_heading,
  },
  {
    ranking: 2,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
    img: second_heading,
  },
  {
    ranking: 3,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh oppurtunities.",
    img: third_heading,
  },
]

export const Headlines:Array<HeadlineProps> = [
    {
        title: 'Hydrogen Vs Electric Cars',
        content: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        title: 'The Downsides of AI Artistry',
        content: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        title: 'Is VC Funding Drying Up?',
        content: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
]