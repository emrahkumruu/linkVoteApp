import { classNames } from '../../Utils';
import './Notify.scss';

// icons
import { XIcon, CheckIcon } from '@heroicons/react/outline';

export default function Notify({ isActive, title, msg, isSuccess }) {

    return (
        <>
            <div className={classNames(
                'notify',
                isActive ? 'active' : ''
            )}>
                <div className={classNames(
                    'border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md',
                    isSuccess ? 'bg-green-100' : 'bg-red-100'
                )} role="alert">
                    <div className="flex items-center">
                        <div className="py-1">
                            {
                                isSuccess ?
                                    <CheckIcon className="h-6 w-6 text-teal-500 mr-4" /> :
                                    <XIcon className="h-6 w-6 text-teal-500 mr-4" />
                            }
                        </div>
                        <div>
                            <p className="font-bold">{title}</p>
                            {msg ? (<p className="text-sm">{msg}</p>) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}