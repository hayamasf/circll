"use client"

import React from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function LegalEntitySelector() {
    return (
        <Tabs className={""} selectedTabClassName="bg-gray-100 hover:cursor-auto">
            <TabList className="flex justify-around text-sm font-medium">
                <Tab className={"w-1/2 text-center rounded-md px-3 py-2 hover:cursor-pointer"}>会社など法人</Tab>
                <Tab className={"w-1/2 text-center rounded-md px-3 py-2 hover:cursor-pointer"}>個人事業者</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>

    )
}


