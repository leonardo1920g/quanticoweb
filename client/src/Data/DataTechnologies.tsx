import IconFront from "@/Components_svg/IconFront"
import IconBack from "@/Components_svg/IconBack"
import IconData from "@/Components_svg/IconData";
import IconNocode from "@/Components_svg/IconNocode";
import IconCloud from "@/Components_svg/IconCloud";
import IconMedia from "@/Components_svg/IconMedia";
import IconHtml from "@/Components_svg/IconHtml";
import IconCss from "@/Components_svg/IconCss";
import IconTypescript from "@/Components_svg/IconTypescript";
import IconReact from "@/Components_svg/IconReact";
import IconNext from "@/Components_svg/IconNext";
import IconTailwind from "@/Components_svg/IconTailwind";
import IconNode from "@/Components_svg/IconNode"
import IconExpress from "@/Components_svg/IconExpress";
import IconSequelize from "@/Components_svg/IconSequelize";
import IconPython from "@/Components_svg/IconPython";
import IconPostgress from "@/Components_svg/IconPostgress";
import IconSql from "@/Components_svg/Iconsql";
import IconMongo from "@/Components_svg/IconMongo";
import IconWordpress from "@/Components_svg/IconWordpress";
import IconWix from "@/Components_svg/IconWix";
import IconWoo from "@/Components_svg/IconWoo"
import IconHostinger from "@/Components_svg/IconHostinger";
import IconVercel from "@/Components_svg/IconVercel";
import IconFigma from "@/Components_svg/IconFigma";
import IconCanva from "@/Components_svg/IconCanva";
import IconCapcut from "@/Components_svg/IconCapcut";

type Tool = {
    name: string;
    icon: React.ElementType;
}

type categories = {
    category: string;
    icon: React.ElementType;
    tools: Tool []
}

export const DataTechnologies: categories[] = [

    {
        category: "Front End",
        icon: IconFront,
        tools: [
            {   
                name: "html",
                icon: IconHtml
            },

            {   
                name: "css",
                icon: IconCss
            },

            {   
                name: "typescript",
                icon:IconTypescript
            },

            {   
                name: "react",
                icon: IconReact
            },

            {   
                name: "next",
                icon: IconNext
            },

            {   
                name: "tailwind",
                icon: IconTailwind
            },
        ]
    },

    {
        category:"Back End",
        icon: IconBack,
        tools: [
            {
                name: "node",
                icon: IconNode
            },

            {
                name: "express",
                icon: IconExpress
            },

            {
                name: "sequelize",
                icon: IconSequelize
            },

            {
                name: "python",
                icon: IconPython
            }
        ]
    },

    {
        category:"Data Base",
        icon: IconData,
        tools: [
            {
                name: "Postgres",
                icon: IconPostgress
            },

            {
                name: "My sql",
                icon: IconSql
            },

            {
                name: "Mongo db",
                icon: IconMongo
            }
        ]
    },

    {
        category:"No Code",
        icon: IconNocode,
        tools: [
            {
                name: "wordpress",
                icon: IconWordpress
            },

            {
                name: "wix",
                icon: IconWix
            },

            {
                name: "woocommerce",
                icon: IconWoo
            }
        ]
    },

    {
        category:"Cloud",
        icon: IconCloud,
        tools: [
            {
                name: "hostinguer",
                icon: IconHostinger
            },

            {
                name: "vercel",
                icon: IconVercel
            }
        ]
    },

    {
        category:"Media",
        icon: IconMedia,
        tools: [
            {
                name: "figma",
                icon: IconFigma
            },

            {
                name: "canva",
                icon: IconCanva
            },

            {
                name: "capcut",
                icon: IconCapcut
            }
        ] 
    }
];