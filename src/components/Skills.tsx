import TypescriptSvg from '../assets/svgs/TypescriptSvg';
import Nestjs from '..//assets/svgs/Nestjs.svg';
import Postgres from '../assets/svgs/Postgres.svg';
import PythonSvg from '../assets/svgs/PythonSvg';
// import GithubSvg from '../assets/svgs/GithubSvg';
import Git from '../assets/svgs/Git.svg';
import React from '../assets/svgs/React.svg';
import MySql from '../assets/svgs/MySql.svg';
import Flask from '../assets/svgs/Flask2.svg';
import Ubuntu from '../assets/svgs/Ubuntu.svg';
import JavascriptSvg from '../assets/svgs/JavascriptSvg';
import RubyOnRails from '../assets/svgs/RubyOnRails.svg';
import MongoDb from '../assets/svgs/MongoDb.svg';
import Html from '../assets/svgs/Html.svg';
import Css from '../assets/svgs/Css.svg';

export default function Skills() {
  return (
    <div
      className="my-10 p-10 flex flex-col gap-5 text-sm text-white"
      id="skills">
      <h1 className="text-center text-5xl">Skills</h1>
      <div className="flex my-0 justify-center mx-auto items-center gap-4 flex-wrap">
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          {TypescriptSvg()}
          <p>TypeScript</p>
        </div>
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          <img src={Nestjs} alt="Nestjs" className="w-14 h-14" />
          <p>NestJs</p>
        </div>
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          <img src={RubyOnRails} className="w-14 h-14" />
          <p>Ruby On Rails</p>
        </div>
        <div className=" sk:hidden sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          <img src={MongoDb} alt="MongoDb" className="w-14 h-14" />
          <p>MongoDb</p>
        </div>
      </div>
      <div className=" flex my-0 justify-center mx-auto items-center gap-4 flex-wrap">
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          <img src={Postgres} alt="MongoDb" className="w-14 h-14" />
          <p>Postgres</p>
        </div>
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border bg-amber-300 rounded-md flex flex-col justify-center items-center gap-1 ">
          <img src={Git} className="w-14 h-14" />
          <p className="text-center leading-4">Git Source Control</p>
        </div>
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          {JavascriptSvg()}
          <p>JavaScript</p>
        </div>

        <div className="sk:hidden sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          {PythonSvg()}
          <p>Python</p>
        </div>
      </div>
      <div className="flex my-0 justify-center mx-auto items-center gap-4 flex-wrap ">
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          <img src={React} className="w-14 h-14" />
          <p>React</p>
        </div>

        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          <img src={MySql} className="w-14 h-14" />
          <p>MySql</p>
        </div>
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          <img src={Flask} className="w-14 h-14 flex justify-start" />
          <p className="text-center leading-5">Flask Microweb Framework</p>
        </div>
      </div>
      <div className="hidden sk:flex my-0 justify-center mx-auto items-center gap-4 flex-wrap ">
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          {PythonSvg()}
          <p>Python</p>
        </div>

        <div className=" sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 ">
          <img src={MongoDb} alt="MongoDb" className="w-14 h-14" />
          <p>MongoDb</p>
        </div>
      </div>

      <div className="flex my-0 justify-center mx-auto items-center gap-4 flex-wrap">
        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900">
          <div className="flex gap-2">
            <img src={Css} className="w-12 h-18" />
            <img src={Html} className="w-12 h-18" />
          </div>
          <p>Html & CSS</p>
        </div>

        <div className="sm:w-32 sm:h-32 w-40 h-40 shadow-lg hover:border rounded-md flex flex-col justify-center items-center gap-1 bg-gray-900 w-50 h-50">
          <img src={Ubuntu} className="w-14 h-14" />
          <p>Ubuntu</p>
        </div>
      </div>
    </div>
  );
}
