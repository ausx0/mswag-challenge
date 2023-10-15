"use client";
import React, { useEffect, useState } from "react";
import dataset from "../dataset.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import _ from "lodash";
import Image from "next/image";
import ReactStars from "react-rating-star-with-type";
import { formatAmountWithCurrency } from "@/lib/utils";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Home = () => {
  const groupedProducts = _.groupBy(dataset, "category");
  const [activeTab, setActiveTab] = useState("smartphones");
  const localStorageKey = "selectedLanguage";
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const extractedColors = dataset.map((data) => data.colors);
  useEffect(() => {
    // Retrieve the selected language from localStorage
    const savedLanguage = localStorage.getItem(localStorageKey);
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: any) => {
    // Set the selected language and save it to localStorage
    setSelectedLanguage(language);
    localStorage.setItem(localStorageKey, language);
  };
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center text-center gap-[20px]  mb-[77px]">
          <h1 className={`font-normal text-[46px] font-serif text-[#484848]`}>
            Miswag New Arrivals
          </h1>
          <p className="text-[16px] text-[#8A8A8A]">
            Stay Ahead of the Curve with Miswag&apos;s Fresh Arrivals!
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {selectedLanguage === "EN" ? "English" : "العربية"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("EN")}
                className={` hover:cursor-pointer ${
                  selectedLanguage === "EN"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("AR")}
                className={` hover:cursor-pointer ${
                  selectedLanguage === "AR"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Tabs defaultValue="smartphones">
          <TabsList className="flex justify-center items-center gap-8 w-auto">
            {Object.keys(groupedProducts).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="focus:bg-slate-950 rounded-[10px] px-[33px] font-sans py-[10px]"
                onClick={() => setActiveTab(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex flex-wrap">
            {dataset
              .filter((data) => data.category === activeTab)
              .map((data, index) => (
                <TabsContent
                  key={data.id}
                  value={data.category}
                  className="flex flex-col justify-center items-center p-10 "
                >
                  <Image src={data.image} width={200} height={250} alt="" />
                  <div>
                    {selectedLanguage === "EN" ? (
                      <p className="block truncate w-[15rem] text-[20px] font-medium ">
                        {data.title.EN}
                      </p>
                    ) : (
                      <p className="flex flex-row-reverse truncate w-[15rem] text-[20px] font-medium ">
                        {data.title.AR}
                      </p>
                    )}

                    <div className="flex justify-between">
                      <span className="text-start text-[#8A8A8A] text-[14px]">
                        {data.brand}
                      </span>
                      <span>
                        <ReactStars
                          value={data.rating}
                          activeColors={[
                            "red",
                            "orange",
                            "#FFCE00",
                            "#9177FF",
                            "#8568FC",
                          ]}
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      {data.price.original_value &&
                        data.price.original_value > data.price.value && (
                          <>
                            <span className="font-medium text-[16px] opacity-50 line-through text-red-500">
                              {formatAmountWithCurrency(
                                data.price.original_value
                              )}
                            </span>
                          </>
                        )}
                      <div className="flex justify-between gap-3 ">
                        <span className="font-medium text-[24px]">
                          {formatAmountWithCurrency(data.price.value)}
                        </span>
                        <AvatarGroup size="sm" max={3} color="default">
                          {data.colors.map((color, index) => (
                            <React.Fragment key={index}>
                              <Avatar
                                itemID={data.id}
                                style={{
                                  backgroundColor: color,
                                }}
                                size="sm"
                                classNames={{
                                  icon: "text-black/0",
                                }}
                              />
                            </React.Fragment>
                          ))}
                        </AvatarGroup>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
