"use client"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Page() {
    return (
        <>
            <Tabs className={"max-w-md bg-gray-100"}>
                <TabList className="flex justify-around">
                    <Tab className={"rounded-md px-3 py-2 text-sm font-medium"}>法人</Tab>
                    <Tab className={"rounded-md px-3 py-2 text-sm font-medium"}>個人事業者</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </>
    );
}
