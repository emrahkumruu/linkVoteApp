import { useDispatch } from 'react-redux';

// icons
import { ArrowSmUpIcon, ArrowSmDownIcon, TrashIcon } from '@heroicons/react/outline';

// store actions
import {
    changeLinkPoint,
    removeLink,
    setNotify,
    closeNotify
} from '../../store/linkList';

// styles
import './LinkItem.scss';

export default function LinkItem({ id, name, point, url }) {

    const dispatch = useDispatch();

    /**
     * 
     * @param {*} id
     * @param {*} actionType 
     */
    const voteLink = (id, actionType) => {
        dispatch(changeLinkPoint({ id, actionType }));
    }


    /**
     * 
     * @param {*} id
     * @param {*} name 
     */
    const deleteLink = (id, name) => {
        dispatch(removeLink({ id }))
        dispatch(setNotify({
            isActive: true,
            isSuccess: true,
            title: `${name} removed`
        }));

        setTimeout(() => {
            dispatch(closeNotify());
        }, 2000);
    }

    return (
        <>
            <div className="link-item flex pb-2 mb-5 w-full">
                <div className="link-item--delete">
                    <button onClick={() => { deleteLink(id, name) }}>
                        <TrashIcon className="w-6" />
                    </button>
                </div>
                <div className="border border-black rounded bg-gray-100 p-2 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold w-16 text-center">{point}</span>
                    <span className="text-sm">Points</span>
                </div>
                <div className="flex flex-col ml-4 w-full">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">{name}</span>
                        <span className="text-gray-400 text-sm">({url})</span>
                    </div>
                    <div className="flex justify-between mt-3 w-full">
                        <div className="flex items-center">
                            <button className="flex items-center" onClick={() => { voteLink(id, 'UP') }}>
                                <ArrowSmUpIcon className="w-5 text-gray-500" />
                                <span className="text-gray-500">Up vote</span>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button className="flex items-center" onClick={() => { voteLink(id, 'DOWN') }}>
                                <ArrowSmDownIcon className="w-5 text-gray-500" />
                                <span className="text-gray-500">Down vote</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}