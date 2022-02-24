import React, {Fragment, useState} from 'react'
import Header from"../../components/header"
import Tail from '../../components/tail'
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const types = [
    { id: 1, name: 'EVM' },
    { id: 2, name: 'Substrate' },

]

export default function Faucet() {
    const [selected, setSelected] = useState(types[0])

    return (
      <div className="mx-auto bg-gray-50 dark:bg-current  transition duration-700">
            <Header></Header>
              <div className="pt-20">
                  <div className="text-center mt-10 ">
                      <div className="text-4xl mt-16 font-extrabold dark:text-gray-400">
                          W3G Authenticated Faucet
                      </div>
                      <div className="mt-5 xl:flex justify-center">
                          <input type="text"
                                 className="bg-gray-200 text-xs md:text-sm  2xl:text-lg rounded-lg p-3  w-9/12  xl:w-5/12  border hover:border-indigo-500 focus:bg-white dark:bg-gray-300  outline-none"
                                 placeholder="Please paste the twitter link which contains your W3G account"/>
                          <div className=" xl:-ml-44 justify-center mt-3 flex">

                              <Listbox value={selected} onChange={setSelected} >
                                  {({ open }) => (
                                    <>
                                        <div className=" relative ">
                                            <Listbox.Button className="relative w-full border-gray-300  xl:border-l    xl:pl-12    text-left cursor-default   sm:text-base">
                                                <span className="block truncate text-lg w-18 xl:w-24 mr-5 xl:mr-2"> {selected.name}</span>
                                                <span className="absolute inset-y-0  right-0 flex items-center  pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                            </Listbox.Button>

                                            <Transition
                                              show={open}
                                              as={Fragment}
                                              leave="transition ease-in duration-100"
                                              leaveFrom="opacity-100"
                                              leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-36 xl:w-44 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto  sm:text-sm">
                                                    {types.map((type) => (
                                                      <Listbox.Option
                                                        key={type.id}
                                                        className={({ active }) =>
                                                          classNames(
                                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                            'cursor-default select-none relative py-2 pl-8 pr-4'
                                                          )
                                                        }
                                                        value={type}
                                                      >
                                                          {({ selected, active }) => (
                                                            <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {type.name}
                        </span>

                                                                {selected ? (
                                                                  <span
                                                                    className={classNames(
                                                                      active ? 'text-white' : 'text-indigo-600',
                                                                      'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                    )}
                                                                  >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                                ) : null}
                                                            </>
                                                          )}
                                                      </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                  )}
                              </Listbox>
                          </div>
                          <p className="flex justify-center text-center text-base font-medium text-gray-500">

                              <button  className="mt-10 xl:mt-0 xl:ml-10  px-5 py-3 dark:bg-gray-700 dark:text-gray-400 rounded-lg font-bold text-gray-600 text-base font-normal border border-black transition duration-500 hover:bg-gray-700  hover:text-white "
                              >
                                  Give me W3G
                              </button>
                          </p>
                      </div>

                  </div>
                  <div className="mt-40 max-w-5xl mx-auto  px-4 mb-32">
                      <h1 className="text-2xl text-black text-center mb-5 dark:text-gray-400">How to fund</h1>
                      <h2 className="text-gray-600 text-sm mb-5">This faucet is running on the Octopus testnet. To prevent malicious actors from exhausting all funds, requests are tied to Twitter social network accounts. Anyone having a Twitter account may request funds within the permitted limits.</h2>
                      <h3 className="text-gray-600 text-sm mb-5">To request funds via Twitter, make a tweet with your W3G account pasted into the contents.</h3>
                      <h4 className="text-gray-600 text-sm mb-5">Copy-paste the tweets URL into the above input box and get your OCT(or USDC). Each account can get 10 OCT(or USDC) every 24 hours.</h4>

                  </div>
              </div>
              <Tail></Tail>
        </div>

    )
}
