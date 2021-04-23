import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// components
import Title from '../../components/Headers/Title';
import Notify from '../../components/Notify/Notify';
import LinkItem from './LinkItem';

// icons
import { PlusIcon, ChevronDownIcon } from '@heroicons/react/outline';

// store actions
import {
    getLinks,
    reOrderLinks
} from '../../store/linkList';

export default function VoteList({ pageName }) {

    const { links, notify } = useSelector((state) => state.linkList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLinks());
    }, []);

    /**
     * 
     * @param {*} value
     */
    const reOrderList = (value) => {
        dispatch(reOrderLinks({ value }));
    }

    return (
        <>
            <Title pageName={pageName} />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 sm:px-0">
                        <div className="h-auto">
                            <div className="md:grid md:grid-cols-5 md:gap-6">
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            <div className="border-b-2 border-dashed rounded pb-5 mb-5">
                                                <Link to="/link/add" className="flex items-center hover:text-teal-800">
                                                    <div className="border border-black rounded bg-gray-100 p-2">
                                                        <PlusIcon className="w-16" />
                                                    </div>
                                                    <span className="font-semibold ml-5 lg:text-3xl md:text-2xl uppercase w-full">
                                                        submit a link
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="w-full flex justify-end">
                                                <div className="relative inline-flex">
                                                    <ChevronDownIcon className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" />
                                                    <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                                                        onChange={(event) => reOrderList(event.target.value)}>
                                                        <option value="">Order by</option>
                                                        <option value="desc">Most Voted (Z → A)</option>
                                                        <option value="asc">Less Voted (A→Z)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                {links.map((object, i) => <LinkItem {...object} key={i} />)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {
                notify.isActive ? (
                    <Notify {...notify} />
                ) : null
            }
        </>
    )

}