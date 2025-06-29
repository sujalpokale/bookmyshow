import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BiChevronDown , BiChevronUp } from "react-icons/bi";

const PlaysFilter =(props) => {
  return (
    <div className="bg-slate-100
    ">
    <Disclosure>
        {({ open }) =>( <>
      <DisclosureButton className="py-2 mx-2 flex items-center">
        { open ? <BiChevronUp/> : <BiChevronDown/> } 
        <span className={open ? "text-red-600" : "text-gray-800" }>
              {props.title}           
        </span>
        </DisclosureButton>
      <DisclosurePanel className="text-gray-500">
        <div className="flex items-center gap-3 flex-wrap">
            {props.tags.map((tag) => (
                    <>
                    <div className="border-2 border-gray-300 p-1">
                        <span className="text-red-600">
                            {tag}
                        </span>
                    </div>
                    </>
                ))
            }
        </div>


      </DisclosurePanel> </>)}
    </Disclosure>
    </div>
  )
}
export default PlaysFilter;
