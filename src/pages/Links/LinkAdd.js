import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

// components
import Title from '../../components/Headers/Title';
import Notify from '../../components/Notify/Notify';

// icons
import { ArrowLeftIcon } from '@heroicons/react/outline';

// utils
import { guidGenerator, getLinks, setLinks } from '../../Utils';

// store actions
import {
    setNotify
} from '../../store/linkAdd';

export default function LinkAdd({ pageName }) {

    let history = useHistory();
    const { notify } = useSelector((state) => state.linkAdd);
    const dispatch = useDispatch();

    // page states
    const [inputLinkName, setInputLinkName] = useState('');
    const [inputLinkUrl, setInputLinkUrl] = useState('');
    const [isCtaReady, setIsCtaReady] = useState(false);

    useEffect(() => {
        dispatch(setNotify({
            isActive: false
        }));
    }, [dispatch])

    useEffect(() => {

        const isLinkNameValid = !!inputLinkName.length && inputLinkName.length >= 4
            , isLinkUrlValid = !!inputLinkUrl.length && inputLinkUrl.length >= 4;

        setIsCtaReady(isLinkNameValid && isLinkUrlValid);

    }, [inputLinkName, inputLinkUrl]);

    /**
     * 
     */
    const saveLink = () => {

        if (!isCtaReady) { return false };

        const Links = getLinks()
            , link = {
                id: guidGenerator(),
                name: inputLinkName,
                url: inputLinkUrl,
                point: 0,
            };

        Links.push(link);
        setLinks(Links);

        dispatch(setNotify({
            isActive: true,
            isSuccess: true,
            title: `${inputLinkName} Added`,
            msg: "You'll redirect to List Page"
        }))

        setTimeout(() => {
            history.push('/link/list');
        }, 3000);
    }

    return (
        <>
            <Title pageName={pageName} />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 sm:px-0">
                        <div className="h-96">
                            <div className="w-full flex-none lg:mb-4 text-teal-600 text-sm font-medium">
                                <Link to="/link/list" className="flex hover:text-teal-800">
                                    <ArrowLeftIcon className="h-5 w-5 text-blue-500 mr-3" /> Return to list
                                </Link>
                            </div>
                            <div className="md:grid md:grid-cols-5 md:gap-6">
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="link_name" className="block text-sm font-medium text-gray-700">Link Name</label>
                                                    <input type="text"
                                                        name="link_name"
                                                        id="link_name"
                                                        autoComplete="off"
                                                        value={inputLinkName}
                                                        onChange={(event) => setInputLinkName(event.target.value)}
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md px-3"
                                                        placeholder="example" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="link_url" className="block text-sm font-medium text-gray-700">
                                                        Link Url
                                                        </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                            http://
                                                            </span>
                                                        <input
                                                            type="text"
                                                            name="link_url"
                                                            id="link_url"
                                                            autoComplete="off"
                                                            value={inputLinkUrl}
                                                            onChange={(event) => setInputLinkUrl(event.target.value)}
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300"
                                                            placeholder="www.example.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={saveLink}>
                                                Save
                                                </button>
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