import type { NextPage } from "next";
import { useState } from "react";
import Table from "../components/Table";
import data, { Tag } from "../src/data";

const Home: NextPage = () => {
  const [filterTag, setFilterTag] = useState<Tag | null>(null);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-3xl mx-auto">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Menu</h1>
            <p className="mt-2 text-md text-gray-700">
              A list of all dishes we serve.
            </p>
            <div className="mt-2 text-md text-gray-700">
              Here the select tag should be shown, e.g. <br />
            </div>

            {/* Only show selected Tag below! */}
            <div className="flex mt-8">
              <div
                className={`mr-1  text-black rounded-lg my-0.5 py-1 px-2 border border-gray-400`}
              >
                <span className="font-medium">Tag:</span> {Tag.Breakfast}
                {/* Think about a way to remove a tag again */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <Table data={data}></Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
